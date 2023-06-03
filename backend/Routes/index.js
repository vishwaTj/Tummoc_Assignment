const express = require('express');
const router = express.Router();

const homeController = require('../Controllers/home_controller');
console.log("Router Loaded");


router.get('/', homeController.home);

module.exports = router;
