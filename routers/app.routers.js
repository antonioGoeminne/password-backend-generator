const express = require('express');
const passwordRoute = require('./passwordRoute.routers')

const router = express.Router();

router.use('/password', passwordRoute)


module.exports = router;
