class ArtworksController < ApplicationController
    def index
        # render json: Artwork.all
      
        artwork_own = Artwork.where(artist_id: params[:user_id])
        artwork_shared = Artwork.joins(:artwork_shares).where("artwork_shares.viewer_id = ?", params[:user_id])
        all_art = [artwork_own, artwork_shared]
        render json: all_art
    end

    def create
        artwork = Artwork.new(artwork_params)
        # replace the `artwork_attributes_here` with the actual attribute keys
        if artwork.save
            render json: artwork
          else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        artwork = Artwork.find(params[:id])
        render json: artwork
    end

    def update
      artwork = Artwork.find(params[:id])
  
      if artwork.update(artwork_params)
        redirect_to artwork_url(artwork)
      else
        render json: artwork.errors.full_messages, status: 422
      end
    end

    def destroy
      artwork = Artwork.find(params[:id])
      artwork.destroy
      render json: artwork  
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :artist_id, :img_url)
    end
end

