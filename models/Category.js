const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Category extends Model { }

Category.init({
  name: DataTypes.STRING
}, { sequelize, modelName: 'categories' })

module.exports = Category