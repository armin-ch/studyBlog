const router = require('express').Router();

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
  res.render('dashboard', { subhead: 'Dashboard' })
})

router.get('/myposts', (req, res) => {
  res.render('myposts')
})

// router.get('/posts/:id', (req, res) => {
//   res.render('post')
// })

router.get('/post/create', (req, res) => {
  res.render('create')
})

module.exports = router;