const express = require('express');
const router = express.Router();
const User_Controller  = require('../Controllers/UserController');

router.post('/create',User_Controller.CreateUser);
router.get('/basic',User_Controller.Basic);

module.exports = router;