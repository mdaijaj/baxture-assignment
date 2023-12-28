const express= require('express')
const router=express()
const userController= require('../controller/index')


//routes for users crude
router.post('/api/users', userController.createUserDetails)
router.get('/api/users', userController.getUserList)
router.get('/api/users/:id', userController.getUserDetails)
router.put('/api/users/:id', userController.editUserDetails)
router.delete('/api/users/:id', userController.deleteUser)

module.exports = router;