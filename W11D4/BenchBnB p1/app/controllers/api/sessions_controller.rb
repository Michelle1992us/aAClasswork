class Api::SessionsController < ApplicationController
  # before_action :require_logged_in!, only: [:destroy]

  # def new
  #   render :new
  # end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render '/api/users/show'
    end
  end

  def destroy
    logout!
    # redirect_to new_session_url
    # render json: {}
    # render json: ['You must be signed in'], status: 404 unless current_user 
    render json: {message: "logout successfu"}
  end
end
