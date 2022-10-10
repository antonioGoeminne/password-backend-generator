const express = require('express')
const router = express.Router()
const generateSimplePassword = require('../functions/generateSimplePassword')

// router.get('/', (req, res) => {
//     console.log(req.query);
//     res.json({ password: 'asdasd' })
// })

router.get('/', (req, res) => {
    const { length } = req.query
    const password = generateSimplePassword({ length: Number(length - 1) })

    res.json({ password: password })
})


module.exports = router;