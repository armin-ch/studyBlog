const router = require('express').Router();
const { User, Category, Post, Comment } = require('../models')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/users/login', (req, res) => {
  res.render('login')
})

router.get('/users/register', (req, res) => {
  res.render('register')
})

router.get('/logout', (req, res) => {
  res.render('logout')
})

router.get('/home', (req, res) => {
  res.render('home')
})

router.get('/dashboard', (req, res) => {
  Post.findAll()
  .then(postData =>{
  const posts = postData.map(post=>post.get({plain:true}))
  console.log(posts)
    res.render('dashboard',{posts})
  })
  .catch(err =>{
    console.log(err)
    res.json(err)
  })
  
})

// router.get('/posts/:id', (req, res) => {
//   res.render('post')
// })

router.get('/post/create', (req, res) => {
  res.render('create')
})

module.exports = router;