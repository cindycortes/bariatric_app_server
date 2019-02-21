const express = require('express')
const router = express.Router()

const food_log = require('../controllers/food_log')


//Food_Log Routes
router.get('/foodlog', food_log.getAll)
router.get('/foodlog/:id', food_log.getOne)
router.post('/foodlog', food_log.addOne)
router.patch('/foodlog/:id', food_log.updateOne)
router.delete('/foodlog/:id', food_log.deleteFoodLog)


module.exports = router