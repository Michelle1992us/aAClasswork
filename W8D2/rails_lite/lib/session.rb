require 'json'

class Session
  # find the cookie for this app (the cookie named _rails_lite_app)
  # If the session cookie has been set before, deserialize the cookie into a hash
  #If no cookie has been set before, you should set the ivar to {}
  def initialize(req)
    cookie = req.cookies["_rails_lite_app"]
    if cookie
      @data = JSON.parse(cookie)
    else
      @data = {}
    end
  end

  #[] and #[]= - will get/set the session content; in this way the Session is Hash-like.

  def [](key)
    @data[key]
  end

  def []=(key, val)
    @data[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  #The first argument to #set_cookie is the name of the cookie which should be _rails_lite_app.
  # The second argument is the cookie attributes. Since we want to pass a collection (our session store) in the cookie, we can serialize our instance variable using JSON. The path should be / (our root url) so the cookie will available at every path.
  def store_session(res)
    cookie = { path: '/', value: @data.to_json }
    res.set_cookie("_rails_lite_app", cookie)
  end
end
