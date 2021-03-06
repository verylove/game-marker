const express = require('express')
const login = require('../controllers/login')
const game = require('../controllers/game')
const { authorization, validation } = require('../middlewares/qcloud')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => res.json({ title: 'Home Page' }))

router.get('/login', authorization, login)
router.post('/games', validation, game.post)
router.get('/games/:id', validation, game.get)
module.exports = router
