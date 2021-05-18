const express = require('express')
const router = express.Router()
const StoreController = require('../Controller/StoreController')
const requiredLogin = require('../middleware/requiredLogin')


router.get('/AllStore',requiredLogin,StoreController().allStore)
router.post('/AddStore',requiredLogin,StoreController().addStore)


module.exports = router