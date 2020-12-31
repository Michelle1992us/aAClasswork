class LikesController < ApplicationController
   #All possibly incorrect, did not have time to refactor; Look at schema!
   
    def index
        if params[:comment_id]
            like = Like.where(likeable_id: params[:comment_id])
        elsif params[:artwork_id]
            like = Like.where(likeable_id: params[:artwork_id])
        end

        render json: like
    end

    def create
        if params[:comment_id]
            like = Like.new(like_params)
        elsif params[:artwork_id]
            like = Like.new(like_params)
        end

        if like.save
            render json: like
          else
            render json: like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
      like = Like.find(params[:id])
      like.destroy
      render json: like  
    end

    private

    def like_params
        params.require(:like).permit(:likeable_id)
    end

end
