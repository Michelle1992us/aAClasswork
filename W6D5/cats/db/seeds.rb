# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all 

kitty1 = Cat.create(birth_date: "2015/01/20", color: "brown", name: "Fat Cat", sex: "M", description: "Fuzzy")

kitty2 = Cat.create(birth_date: "2010/05/11", color: "black", name: "Kitty", sex: "M", description: "Old cat")

kitty3 = Cat.create(birth_date: "2011/02/19", color: "blue", name: "Tom", sex: "F", description: "Playful")

kitty4 = Cat.create(birth_date: "1999/06/9", color: "brown", name: "Bob", sex: "F", description: "Sleeps a lot")