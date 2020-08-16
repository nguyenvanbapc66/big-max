const { Router } = require('express')
const router = Router()
const userController = require('./controllers/homeStay')

router.post('/home_stay', userController.createUser)
router.get('/home_stay', userController.getUser)
router.put('/home_stay/:home_stay_id', userController.editUser)
router.delete('/home_stay/:home_stay_id', userController.deleteUser)

module.exports = router