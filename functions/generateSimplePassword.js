const ABC = require('../utils/abc')
const getRandom = require('../functions/getRandom')

const generateSimplePassword = (props) => {
    const { length } = props
    let password = ['']

    {
        [...Array(length > 1 ? length : 1)].fill(1).forEach((x, index) => {
            let randomIndex = getRandom({ length: ABC.length })
            let letter = ABC[randomIndex]
            if (length >= 1) { password[0] = letter }
            password = [...password, letter]
        })
    }

    return password.join('');
}

module.exports = generateSimplePassword;