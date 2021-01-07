class UsersController < ApplicationController

    #new show index edit update destroy create user_params
    def new
        @user = User.new
        render :new
    end

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    
end
