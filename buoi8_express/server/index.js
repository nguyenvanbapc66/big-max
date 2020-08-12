const express = require('express')
const { resolve } = require('path')
const app = express()
const port = 3000

// app.get('/', (req, res, next) => {
//   console.log(req.headers, req.body)
//   res.status(200).send('OK')
// })

app.use('/static', express.static(resolve(process.cwd(), 'server/static')))

let numOfReq = 0
app.set('view engine', 'ejs')
  .set('views', resolve(__dirname, 'views'))
  .get('/', (req, res, next) => {
    res.render('index', { username: 'Minh Vuong' })
  })
  .get('/', (req, res, next) => {
    res.render('index', { username: 'Minh Vuong' })
  }, (req, res, next) => {
    res.render('index', { username: 'Minh Vuong' })
  })
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

app.post('/*', (req, res, next) => {
  console.log(req.body)
  if (numOfReq++ % 2 == 0) return next()
  res.status(401).send('401 (Not authorized)')
}, (req, res) => {
  res.send({ data: '1234' })
})
app.use('/user', require('./routers/user'))

app.use('/customer', require('./subApplications/customer'))

app.get('/user/login', (req, res) => {
  res.send('OK')
})
// app.use('/user', require('./routers/user1'))

app.listen(port, (err) => {
  console.log(`Server started at http://localhost:${port}`);
})




// app.post('/*', (req, res, next) => {
//   console.log(req.body)
//   if (numOfReq++ % 2 == 0) return next()
//   res.status(401).send('401 (Not authorized)')
// })
// app.post('/hello', (req, res) => {
//   res.send({ data: '1234' })
// })