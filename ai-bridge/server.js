const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

// Gestion du .env
require('dotenv').config()

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('COUCOU !')
})

// ROUTES
app.use('/generate-avatar', require('./routes/generate-avatar'))
app.use('/generate-player', require('./routes/generate-player'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
