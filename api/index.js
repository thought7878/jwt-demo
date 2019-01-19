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
const routes = require('./routes')
routes(app)

app.listen(PORT, () => console.log(`server is running at port ${PORT}`))
