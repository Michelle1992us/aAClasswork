class UsersController < ApplicationController
    def index
      if params[:query]
        render json: User.where('username LIKE ?', params[:query])
      else
        render json: User.all
      end
      # In UsersController#index check if a query is present in the request params. 
      # If it is, use that query to filter the users returned by the index action. 
      # If there is no query, just return all users as usual.
    end

    def create
        user = User.new(user_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if user.save
            render json: user
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
      user = User.find(params[:id])
  
      if user.update(user_params)
        redirect_to user_url(user)
      else
        render json: user.errors.full_messages, status: 422
      end
    end

    def destroy
      user = User.find(params[:id])
      user.destroy
      render json: user  
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end
