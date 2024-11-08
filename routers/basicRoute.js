const express = require('express')
const router = express.Router()
const basicController = require('../controllers/basicController')

router.get('/facts',basicController.getRandomFacts)
router.get('/coins',basicController.getBitcoinData)
router.get('/ips',basicController.getCurrIP)



module.exports = router