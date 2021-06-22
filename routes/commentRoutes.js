const router = require('express').Router()
const { Post } = require('../models')
const passport = require('passport')
const mysql = require('mysql2')

router.post('/posts/comment/:pid', passport.authenticate('jwt'), (req, res) => Comment.create({
  text: req.body.text,
  post_id: req.params.pid,
  uid: req.user.id
})
  .then((comment) => {
    res.json(comment)
  })
  .catch(err => console.log(err)))

module.exports = router