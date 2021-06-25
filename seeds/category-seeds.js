const { Category } = require('../models')

const categoryData = [
  {
    name: 'HTML-CSS',
    description: 'HTML is the standard markup language for Web pages. CSS is the language we use to style an HTML document.'
  },
  {
    name: 'Javascript',
    description: "JavaScript is the world's most popular programming language, that programs the behavior of web sites."
  },
  {
    name: 'NodeJS',
    description: 'Node.js allows Javascript to be applied outside a website environment.'
  },
  {
    name: 'MySQL',
    description: 'SQL is a standard language for storing, manipulating and retrieving data in databases.'
  }
]

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories
