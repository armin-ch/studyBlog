const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING(50000),
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'posts'
  })

module.exports = Post