#json.extract! @gift, :title, :description

# In the show view, include not only all guests, but all of the guests' gifts as well.

json.name @party.name

json.guests @party.guests do |guest|
    json.name guest.name
    json.gifts guest.gifts, :title

end