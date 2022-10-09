const ABC = require('../utils/abc')
const getRandom = require('../functions/getRandom')

const generateSimplePassword = (props) => {
    const { length } = props
    let password = ['']

    {
        [...Array(length)].fill(1).forEach((x, index) => {
            let randomIndex = getRandom({ length: ABC.length })
            let letter = ABC[randomIndex]
            password[0] = letter;
            password = [...password, letter]
        })
    }

    return password.join('');
}

module.exports = generateSimplePassword;