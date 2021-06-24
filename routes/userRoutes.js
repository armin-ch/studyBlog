const router = require('express').Router()
const { User, Post } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'studyblognoresponse@gmail.com',
    pass: 'studyblog2021'
  }
})



router.post('/users/register', (req, res) => {
  const { username, email } = req.body
  User.register(new User({
    username, email
  }), req.body.password, err => {
    if (err) { console.log(err) }
    let mailOptions = {
      from: 'studyblognoresponse@gmail.com',
      to: email,
      subject: 'Study Blog Account Created!',
      text: 'Your study blog account has been created. You may now login using your username and password.'
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

router.get('/users/:id', (req, res) => User.findOne({ where: { id: req.params.id } })
  .then(user => res.json(user))
  .catch(err => console.log(err)))

router.get('/users/posts/:uid', (req, res) => Post.findAll({ where: { user_id: req.params.uid } })
  .then(posts => res.json(posts))
  .catch(err => console.log(err)))

router.get('/users/viewposts/:uid', (req, res) => Post.findAll({ where: { id: req.params.uid } })
  .then(posts => {
    res.render('userPosts', {
      user_id: req.params.uid
    })
  })
  .catch(err => console.log(err)))

module.exports = router
