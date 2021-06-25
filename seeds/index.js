require('dotenv').config()
const seedCategories = require('./category-seeds')
// const seedPosts = require('./post-seeds')
// const seedUsers = require('./user-seeds')

const sequelize = require('../db')

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')
  await seedCategories()
  console.log('\n----- CATEGORIES SEEDED -----\n')

  process.exit(0)
}

seedAll()
