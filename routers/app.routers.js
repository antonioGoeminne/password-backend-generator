const express = require('express');
const passwordRoute = require('./passwordRoute.routers')

const router = express.Router();

router.use('/', passwordRoute)


module.exports = router;
