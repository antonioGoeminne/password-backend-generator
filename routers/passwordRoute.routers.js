const express = require('express')
const router = express.Router()
const generateSimplePassword = require('../functions/generateSimplePassword')



router.get('/', (req, res) => {

    const { length } = req.params
    const password = generateSimplePassword(length)

    res.json({ password: password })
})

module.exports = router;