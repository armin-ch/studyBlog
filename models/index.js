const User = require('./User.js')
const Category = require('./Category.js')
const Post = require('./Post.js')

// your relationships go here...
User.hasMany(Post, {
  foreignKey: 'user_id'
})
Category.hasMany(Post, {
  foreignKey: 'category_id'
})


module.exports = { User, Category, Post }
