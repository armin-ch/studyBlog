const router = require('express').Router();
const { Category, User, Post } = require('../models');
const passport = require('passport')
const mysql = require('mysql2')
const db = require('../db')

// get all categories
router.get('/categories', (req, res) => {
  Category.findAll()
  .then(categoryData => {
    const categories = categoryData.map(data => data.get({ plain: true }))
    
    res.render('categories', {
      categories,
      subhead: 'Topics' })
  })
  .catch(err => {
    res.status(500).json(err)
  })
})


// show single category
// with all posts in that category
// (pagination would be nice)
// posts ordered by score

router.get('/categories/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, 
      {
      include: [Post]
      }
    );
    const category = categoryData.get({ plain: true });
      
    res.render('category', {
      ...category,
      subhead: category.name
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


// 

module.exports = router;
