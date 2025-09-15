const express = require('express')
const { v4: uuidv4 } = require('uuid')
const { CORS_ORIGIN } = require('./config')

const ID = uuidv4()
const PORT = 8081

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN)
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/*', (req, res) => {
  res.json({ message: `SUCCESS ${ID}` })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});

