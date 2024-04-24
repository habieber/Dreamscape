const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All routes in here begin with /api/users

// GET api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

// POST /api/users
router.post('/', usersCtrl.create)
// POST /api/users/login
router.post('/login', usersCtrl.login)

module.exports = router