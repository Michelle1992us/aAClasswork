require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  # take a Rack::Request and Rack::Response object as inputs and 
  #save them as instance variables (ivars) for later use
  def initialize(req, res, route_params = {})
    @req, @res = req, res
    @already_built_response = false
    @params = route_params.merge(req.params)

  end

  # Helper method to alias @already_built_response. Avoid double render
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  # Issuing a redirect consists of two parts, setting the 'Location' field of the response 
  # header to the redirect url and setting the response status code to 302
  def redirect_to(url)
    prepare_render_or_redirect

    @res.status = 302
    @res["Location"] = url

    nil
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    prepare_render_or_redirect

    @res.write(content)
    @res['Content-Type'] = content_type

    nil
  end



# Write a #render(template_name) method that will:
# Use controller and template names to construct paths to template files.
# Use File.read to read the template file.
# Create a new ERB template from the contents.
# Evaluate the ERB template, using binding to capture the controller's instance variables.
# Pass the result to render_content with a content_type of text/html.
  def render(template_name)
    dir_path = File.dirname(__FILE__)
    template_fname = File.join(
      dir_path, "..",
      "views", self.class.name.underscore, "#{template_name}.html.erb"
    )

    template_code = File.read(template_fname)

    render_content(
      ERB.new(template_code).result(binding),
      "text/html"
    )
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(@req)
  end

  # # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    if protect_from_forgery? && req.request_method != "GET"
      check_authenticity_token
    else
      form_authenticity_token
    end

    self.send(name)
    render(name) unless already_built_response?

    nil
  end

  private
  #Make sure that the #redirect_to and #render_content methods call Session#store_session so that the session information is stored in the cookie after the response is built.
  def prepare_render_or_redirect
    raise "double render error" if already_built_response?
    @already_built_response = true
    session.store_session(@res)
  end
  
end

