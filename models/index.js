const User = require('./User.js')
const Category = require('./Category.js')
const Post = require('./Post.js')
const Comment = require('./Comment.js')

// your relationships go here...
User.hasMany(Post, {
  foreignKey: 'user_id'
})
Category.hasMany(Post, {
  foreignKey: 'category_id'
})
User.hasMany(Comment, {
  foreignKey: 'uid'
})
Post.hasMany(Comment, {
  foreignKey: 'post_id'
})
Post.belongsTo(User, {
  foreignKey: 'user_id'
})
Post.belongsTo(Category, {
  foreignKey: 'category_id'
})

module.exports = { User, Category, Post, Comment }
