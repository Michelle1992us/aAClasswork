json.array! @parties do |party|
    json.name party.name
    json.guests party.guests
end

# In the index view, show all parties, and include all of their guests