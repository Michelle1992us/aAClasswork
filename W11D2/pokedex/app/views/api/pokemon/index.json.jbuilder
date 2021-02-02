
#Iterate over each pokemon.
@pokemon.each do |poke|
  #Use json.set! to explicitly set the key to the pokemon's id.
  json.set! poke.id do
    #Use json.extract! to grab the pokemon's id, name, and image_url.
    json.extract! poke, :id, :name
    #use the asset_path helper to find the correct path to the image.
    json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
  end
end

# {
#   1: {
#     id: 1,
#     name: /*...*/,
#     image_url: /*...*/
#   },
#   2: {
#     id: 2,
#     name: /*...*/,
#     image_url: /*...*/
#   },
#   //..
# }