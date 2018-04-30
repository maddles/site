const express = require('express')
const path = require('path')

const app = module.exports = express()
const postDb = require('./db/postsModels')
const authDb = require('./db/authModels')
const passport = require('passport')
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local').Strategy

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

passport.use(new LocalStrategy({
    usernameField:'username', passwordField: 'password',
  }, (username, password, done) => {
    authDb.Users.query().select('*')
    .then((users) => {
      const user = users.length > 0 ? users[0] : null

      if (!user) {
        return done(null, false, { message: 'no such user' })
      }

      if (!user.verifyPassword(password)) { 
        return done(null, false, { message: 'bad password' })
      }

      return done(null, user)
    })
    .catch((error) => {
      return done(null, false)
    })
}))

app.post('/api/login', (req, res) => {
  passport.authenticate('local', (err, user, message) => {
    if (err) {
      res.json(err)
      return
    }
    
    if (!user) {
      res.json(message)
      return
    }

    res.json(message)
  })(req, res)
})

app.get('/api/posts', (req, res) => {
  postDb.Posts.query().select('*')
    .then((result) => {
      console.log(result)
      res.json(result)
    })
})

app.get('/api/addPost', (req, res) => {
  const {title, body} = req
  const post = new Post({
    post_title: title,
    post_body: body
  })

  post.save().then((ids) => {
    console.log(ids)
  })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`API listening on ${port}`)