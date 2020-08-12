const { Router } = require("express")

const router = Router()
router.get('/get-info', (req, res) => {
  res.render('user', { username: 'Minh Vuong' })
})

module.exports = router