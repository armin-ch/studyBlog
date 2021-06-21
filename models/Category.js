const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Category extends Model { }

Category.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },
  { 
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'categories' 
  })

module.exports = Category