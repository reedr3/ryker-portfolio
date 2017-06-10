# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(title: 'About Me')
Category.create(title: 'Projects')
Category.create(title: 'Teaching')
Category.create(title: 'Publications')
Category.create(title: 'Hobbies')
Category.create(title: 'Contact')

Block.create(header: 'Post 1', image: 'img1', description: 'description 1', category_id: 1)
Block.create(header: 'Post 2', image: 'img1', description: 'description 1', category_id: 1)
Block.create(header: 'Post 3', image: 'img1', description: 'description 1', category_id: 1)
Block.create(header: 'Post 4', image: 'img1', description: 'description 1', category_id: 2)
Block.create(header: 'Post 5', image: 'img1', description: 'description 1', category_id: 2)
Block.create(header: 'Post 6', image: 'img1', description: 'description 1', category_id: 3)
Block.create(header: 'Post 7', image: 'img1', description: 'description 1', category_id: 3)
Block.create(header: 'Post 8', image: 'img1', description: 'description 1', category_id: 4)
Block.create(header: 'Post 9', image: 'img1', description: 'description 1', category_id: 4)
Block.create(header: 'Post 10', image: 'img1', description: 'description 1', category_id: 5)
Block.create(header: 'Post 11', image: 'img1', description: 'description 1', category_id: 5)
Block.create(header: 'Post 12', image: 'img1', description: 'description 1', category_id: 5)
Block.create(header: 'Post 13', image: 'img1', description: 'description 1', category_id: 6)
