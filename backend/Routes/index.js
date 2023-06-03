const express = require('express');
const router = express.Router();

const homeController = require('../Controllers/home_controller');
console.log("Router Loaded");

router.get('/', homeController.home);
router.use('/users',require('./User_Router'));

module.exports = router;
