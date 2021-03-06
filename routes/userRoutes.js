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
      html: `
<table role="presentation" cellspacing="0" cellpadding="0" border="0"
  style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0 auto;background-color:#212529;">
  <tbody>
    <tr>
      <td align="center"
        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
          style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;background-color:#212529;">
          <tbody>
            <tr>
              <td height="35px"
                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:35px">
                <img
                  src="https://i.imgur.com/0AwF2ir.png"
                  alt="" width="1" height="35" style="display:block;height:35px;width:1px"></td>
            </tr>
            <tr>
              <td
                style="font-family:'Josefin Sans','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center">
                  <h1 style="color:#fff;text-transform:uppercase;font-size:34px;"><img src="https://i.imgur.com/KxoRYQI.png" style="margin-bottom:2rem;"><br />Study Blog</h1>
                </td>
            </tr>
            <tr>
              <td height="35px"
                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:35px">
                <img
                  src="https://i.imgur.com/0AwF2ir.png"
                  alt="" width="1" height="35" style="display:block;height:35px;width:1px"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td
        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;background-color:#212529;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
          style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0 auto;max-width:610px">
          <tbody>
            <tr>
              <td>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                  style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;">
                  <tbody>
                    <tr>
                      <td
                        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;width:20px">
                        <img
                          src="https://i.imgur.com/0AwF2ir.png"
                          alt="" width="30" height="1" style="display:block;width:20px;height:1px">
                      </td>
                      <td
                        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
                          style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;background-color:#fff;border-radius:15px;">
                          <tbody>
                            <tr>
                              <td height="48"
                                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:48px">
                                <img
                                  src="https://i.imgur.com/0AwF2ir.png"
                                  alt="" width="1" height="48" style="display:block;height:48px;width:1px"
                                  ></td>
                            </tr>
                            <tr>
                              <td
                                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center">
                                <p
                                  style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;margin:0;padding:0;font-size:26px;line-height:38px;color:#0e0e0e;text-align:center;font-weight:900">
                                  Account Verification</p>
                                <hr
                                  style="height:1px;border:0;background:#c4c4c4;width:62px;margin:30px auto;display:block">
                                <p
                                  style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;margin:0;padding:0;font-size:14px;line-height:26px;color:#0e0e0e;text-align:center">Hey <b>${username}!</b><br />Your <a href="https://studyblog.herokuapp.com/" style="color:#212529;font-weight:700;text-decoration:none;">Study Blog</a> account has been created.<br />You may now login using your username and password.</p>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:26px">
                                <img
                                  src="https://i.imgur.com/0AwF2ir.png"
                                  alt="" width="1" height="26" style="display:block;height:26px;width:1px"
                                  ></td>
                            </tr>
                            <tr>
                              <td align="center"
                                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center"
                                  style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0 auto;max-width:306px">
                                  <tbody>
                                    <tr>
                                      <td
                                        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:58px;background:#fdd000">
                                        <a href="https://studyblog.herokuapp.com/users/login"
                                          style="text-decoration:none;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;color:#282c30;margin:0 auto;display:block;padding:13px 15px;font-size:16px;line-height:32px;font-weight:bold;background:#fcba03"
                                          target="_blank">Login Here</a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:26px">
                                <img
                                  src="https://i.imgur.com/0AwF2ir.png"
                                  alt="" width="1" height="26" style="display:block;height:26px;width:1px"
                                  ></td>
                            </tr>
                            <tr>
                              <td height="48"
                                style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;height:48px">
                                <img
                                  src="https://i.imgur.com/0AwF2ir.png"
                                  alt="" width="1" height="48" style="display:block;height:48px;width:1px"
                                  ></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td
                        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center;width:20px">
                        <img
                          src="https://i.imgur.com/0AwF2ir.png"
                          alt="" width="30" height="1" style="display:block;width:20px;height:1px">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr style="height:28px">
      <td height="28"
        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center"><img
          src="https://i.imgur.com/0AwF2ir.png"
          alt="" width="1" height="28" style="display:block;height:28px;width:1px"></td>
    </tr>
    <tr style="font-size:12px;line-height:20px;color:#ddd;text-align:center">
      <td style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0"
          style="width:100%;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0 auto;max-width:610px">
          <tbody>
            <tr>
              <td>
                <p
                  style="font-size:12px;line-height:20px;color:#ddd;text-align:center;font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;margin:0;padding:0">
                  You have received this email because you are registered with Study Blog.<br />This is an automatically
                  generated email. Please do not reply.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr style="height:28px">
      <td height="28"
        style="font-family:'Lato','Apple SD Gothic Neo',Arial,sans-serif;padding:0;margin:0;text-align:center"><img
          src="https://i.imgur.com/0AwF2ir.png"
          alt="" width="1" height="28" style="display:block;height:28px;width:1px"></td>
    </tr>
  </tbody>
</table>`
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

router.get('/validate/users/:uid', passport.authenticate('jwt'), (req, res) => User.findOne({ where: { id: req.params.uid } })
  .then(user=>res.json(req.user.id)))

router.get('/validate/getusername/:uid', passport.authenticate('jwt'), (req, res) => User.findOne({ where: { id: req.params.uid } })
  .then(user => res.json(req.user.username)))


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
