const router = require('express').Router()
const { Comment } = require('../models')
const passport = require('passport')
const mysql = require('mysql2')
const db = require('../db')
const db1 = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCALDB_URL)


router.post('/posts/comment/:pid', passport.authenticate('jwt'), (req, res) => Comment.create({
  text: req.body.text,
  post_id: req.params.pid,
  uid: req.user.id
})
  .then((comment) => {
    res.json(comment)
  })
  .catch(err => console.log(err)))

  router.get('/comments/:pid', (req,res)=>{
    db1.query(`SELECT text FROM comments WHERE post_id = ${req.params.pid}`, (err,comments)=>{
      if (err) { console.log(err) }
      res.json(comments)
    })
  })

module.exports = router