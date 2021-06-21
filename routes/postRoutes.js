const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:rootroot@localhost:8809/studyblog_db')

router.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (err, posts) => {
    if (err) { console.log(err) }
    res.json(posts)
  })
})

router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create({
  text: req.body.text,
  title: req.body.title,
  user_id: req.user.id
})
  .then(post => res.json(post))
  .catch(err => console.log(err)))

router.put('/posts/:id', passport.authenticate('jwt'), (req, res) => Post.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

router.delete('/posts/:id', passport.authenticate('jwt'), (req, res) => Post.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
