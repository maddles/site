const express = require('express')
const path = require('path')

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/posts', (req, res) => {
  const posts = [
    {
      title: 'Post one',
      body: 'This is words in the post body <img src=\"https://i.imgur.com/UOUq3T6.jpg\" \/>. Markup here.'
    },
    {
      title: 'Post two',
      body: 'I recently posted a very proud dog.'
    }
  ]

  res.json(posts)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`API listening on ${port}`)