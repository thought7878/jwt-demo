const express = require('express')
const { PORT, DB_PATH } = require('./config')
const app = express()

// DB
const mongoose = require('mongoose')
mongoose.connect(DB_PATH)
const db = mongoose.connection
db.on('error', () => console.error('mongo failed to connect!!!'))
db.on('connected', () => console.log('mongo connected'))

// api
app.get('/', (req, res) => {
  res.send('hello client')
})

app.listen(PORT, () => console.log(`server is running at port ${PORT}`))
