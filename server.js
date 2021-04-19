const express = require('express')
const sharp = require('sharp')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

const { imageStore } = require('./client/src/utils/projectStore')

// Optimize the size of each image in Projects page to increase performance.
const imageOptimization = (array) => {
  array.forEach((img, index) => {
    sharp(img)
      .resize(720, 480, {
        fit: 'inside',
      })
      .toFile(
        `./client/public/assets/images/optimized/optimizedImage${index}.png`
      )
  })
}
// imageOptimization(imageStore)

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
