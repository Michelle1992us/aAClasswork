class CatsController < ApplicationController

#     Prefix Verb   URI Pattern                                                                              Controller#Action
#     cats GET    /cats(.:format)                                                                          cats#index
#          POST   /cats(.:format)                                                                          cats#create
#  new_cat GET    /cats/new(.:format)                                                                      cats#new
# edit_cat GET    /cats/:id/edit(.:format)                                                                 cats#edit
#      cat GET    /cats/:id(.:format)                                                                      cats#show
#          PATCH  /cats/:id(.:format)                                                                      cats#update
#          PUT    /cats/:id(.:format)                                                                      cats#update
#          DELETE /cats/:id(.:format)                                                                      cats#destroy

    def index
        @cats = Cat.all
        render :index
    end

    def show
        @cat = Cat.find_by(params[:id])
        render :show
    end

    def create
        @cat = Cat.new(cat_params)
        if @cat
            render :new
        else
            render json: cat.error.full_messages, status: 422
        end
    end


    private

    def cat_params
        params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
    end

end
