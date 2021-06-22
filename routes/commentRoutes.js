const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
const mysql = require('mysql2')

router.post('/posts/:pid/comment', passport.authenticate('jwt'), (req, res) => Comment.create({
  text: req.body.text,
  post_id: req.params.pid,
  uid: req.user.id
})
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router