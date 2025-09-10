const express = require('express');
const router = express.Router();
const { userRegistration } = require('./user.controller');

// register endpoint
router.post('/register', userRegistration);

module.exports = router;