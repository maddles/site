const express = require('express')
const path = require('path')

const app = module.exports = express()
const postDb = require('./db/postModels')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/posts', (req, res) => {
  postDb.Posts.query().select('*')
    .then((result) => {
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