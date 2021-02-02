#json.array! @guests do |guest|
 #   json.name guest.name
  #  json.age guest.age
   # json.favorite_color guest.favorite_color
#end

#json.array! @guest, partial: 'api/guests/guest', as: :guest

json.array! @guests do |guest|
   #Bonus: index shows only guests between 40 and 50
   if guest.age > 40 && guest.age < 50
      json.partial! 'api/guests/guest', guest: guest
   end
end

# json.partial! 'api/guests/guest', collection: @guests, as: :guest