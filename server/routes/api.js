const express = require('express')
const router = express.Router()
const House = require('../controllers/house')

/* Routes */
router.get('/house', House.getHouse)
router.post('/house', House.addHouse)
router.put('/house/:id', House.updateHouse)
router.delete('/house/:id', House.deleteHouse)

module.exports = router