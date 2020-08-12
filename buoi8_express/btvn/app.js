const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routers/user')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/userManager', {
  useNewUrlParser: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected')
})

const port = 3000

app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))