const router = require('express').Router()
const { Post, User, Category } = require('../models')
const passport = require('passport')
const mysql = require('mysql2')
const db = mysql.createConnection(process.env.JAWSDB_URL || process.env.LOCALDB_URL)

router.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (err, posts) => {
    if (err) { console.log(err) }
    res.json(posts)
  })
})

router.get('/getpost/:id', (req, res) => Post.findOne({ where: { id: req.params.id } })
  .then(post => res.json(post))
  .catch(err => console.log(err)))

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ 
          model: User
        },
        {
          model: Category
        }]
    });
    const post = postData.get({ plain: true });
    console.log(post)
    res.render('post', {
      ...post
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/posts', passport.authenticate('jwt'), (req, res) => Post.create({
  title: req.body.title,
  body: req.body.body,
  user_id: req.user.id,
  category_id: req.body.category_id
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
