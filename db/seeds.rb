# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create!({ username: 'USERNAME', password: 'PASSWORD' ,img_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F251632525%2Fdainty-circle-necklace-karma-necklace&psig=AOvVaw28_YyETzw-tuAGKXke-Uhc&ust=1593299728523000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLil2ZTOoOoCFQAAAAAdAAAAABAF"})