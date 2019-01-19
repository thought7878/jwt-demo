const express = require('express')
const { PORT, DB_PATH } = require('./config')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

// middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

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
const User = require('./models/user')
app.post('/user/signup', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json({
      msg: 'user saved'
    })
  } catch (error) {
    res.status(500).json({ msg: 'signup error', error })
  }
})

app.listen(PORT, () => console.log(`server is running at port ${PORT}`))
