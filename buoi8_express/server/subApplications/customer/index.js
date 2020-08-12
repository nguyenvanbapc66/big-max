const express = require('express')
const { resolve } = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', resolve(__dirname, 'views'))
app.get('/', (req, res) => {
  res.render('index', { username: 'Minh Vuong' })
})

module.exports = app