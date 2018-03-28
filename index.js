const express = require('express')
const path = require('path')

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// Put all API endpoints under '/api'
app.get('/api/words', (req, res) => {
  const count = 5

  // Generate some passwords
  const words = ['hi', 'hello', 'yes', 'I am here', 'ok']

  // Return them as json
  res.json(words)

  console.log(`Sent ${count} words`)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Password generator listening on ${port}`)