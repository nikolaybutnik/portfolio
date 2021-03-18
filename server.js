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

sharp('./client/public/assets/images/BurgerDesktop-min.png')
  .resize(720, 480, {
    fit: 'inside',
  })
  .toFile('./client/public/assets/images/optimized/BurgerDesktopOptimized.png')

sharp('./client/public/assets/images/BurgerMobile-min.png')
  .resize(720, 480, {
    fit: 'inside',
  })
  .toFile('./client/public/assets/images/optimized/BurgerMobileOptimized.png')

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
