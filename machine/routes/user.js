const express = require('express')
const router = express.Router()
const formController = require('../Controller/formController')
const requiredLogin = require('../middleware/requiredLogin')


router.post('/Signup',formController().signup)
router.post('/Login',formController().login)
router.get('/signout',formController().signout)













module.exports = router