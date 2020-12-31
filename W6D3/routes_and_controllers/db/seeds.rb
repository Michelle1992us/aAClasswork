# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all

user1 = User.create(username: 'Chippy')
user2 = User.create(username: 'Potato')

artwork1 = Artwork.create(title: 'Rainbow', artist_id: user1.id, img_url: 'pretty.com')
artwork2 = Artwork.create(title: 'Foods', artist_id: user2.id, img_url: 'fatty.com')

artwork_share1 = ArtworkShare.create(artwork_id: artwork1.id, viewer_id: user2.id)
artwork_share2 = ArtworkShare.create(artwork_id: artwork2.id, viewer_id: user1.id)

comment1 = Comment.create(artwork_id: artwork1.id, user_id: user2.id, body: 'Pretty colors')
comment2 = Comment.create(artwork_id: artwork2.id, user_id: user1.id, body: 'Makes me hungry!')