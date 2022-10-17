const express = require('express')
const router = express.Router()
const addCapitalLetters = require('../functions/addCapitalLetters')
const addNumbers = require('../functions/addNumbers')
const addSymbols = require('../functions/addSymbols')
const generateSimplePassword = require('../functions/generateSimplePassword')

router.get('/', (req, res) => {

    const { length, checkOptions } = req.query

    //me quedo con un dicionary de las options que tengan true
    const optionsConverted = checkOptions.split(',').filter((data) => data.includes('true')).map(x => x.replace('=true', ''))
    let password = generateSimplePassword({ length: Number(length - 1) })

    const validateOptions = () => {

        if (optionsConverted.length) {
            if (optionsConverted.some(x => x === 'includeCapitals')) {
                password = addCapitalLetters(password)
            }
            if (optionsConverted.some(x => x === 'includeNumbers')) {
                password = addNumbers(password)
            }
            if (optionsConverted.some(x => x === 'includeSymbols')) {
                password = addSymbols(password)
            }
        }

    }

    validateOptions()

    res.json({ password: password })
})


module.exports = router;