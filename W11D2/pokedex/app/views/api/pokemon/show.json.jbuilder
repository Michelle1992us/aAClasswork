#render all the information about a single pokemon, including its items and moves. 
#In this case, we are listing the pokemon, items, and moves separately, since they represent separate resources.

json.pokemon do 
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end
    
json.moves do 
    @pokemon.moves.each do |move|
        json.set! move.id do
            json.extract! move, :id, :name 
        end
    end
end

if @pokemon.items.length != 0 
    json.items do 
        @pokemon.items.each do |item| 
            json.set! item.id do 
                json.extract! item, :id, :pokemon_id, :name, :price, :happiness
                json.image_url asset_path(item.image_url) 
            end
        end
    end 
else
    json.items ({})
end

# {
#   "pokemon": {
#             "1": {
#               "id": 1,
#               "name": "Bulbasaur",
#               "attack": 49,
#               "defense": 49,
#               "poke_type": "grass",
#               "image_url": "/pokemon_snaps/1.svg"
#             }
#           },
#  "moves": {
#             "1": {
#               "id": 1,
#               "name": "tackle"
#               },
#             /*...*/
#             },

#   "items": {
#           "1": {
#             "id": 1,
#             "pokemon_id": 2419,
#             "name": "Sleek Marble Bench",
#             "price": 38,
#             "happiness": 43,
#             "image_url": "/assets/pokemon_potion.svg"
#           },
#           /*...*/

#     }
# }