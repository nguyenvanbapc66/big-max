const { Router } = require('express')
const router = Router()
const userController = require('../controllers/user')

router.post('/users', userController.createUser)
router.get('/users', userController.getUser)
router.put('/users/:user_id', userController.editUser)
router.delete('/users/:user_id', userController.deleteUser)

module.exports = router