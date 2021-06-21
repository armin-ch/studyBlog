const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init(
  {
    title: DataTypes.STRING,
    text: DataTypes.STRING(50000),
    score: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'posts'
  })

module.exports = Post