const getRandom = require('./getRandom')

const addCapitalLetters = (password) => {

    const newPassword = password.split('')

    {
        [...Array(Math.round(password.length / 2))].forEach(el => {
            let randomIndex = getRandom({ length: password.length })
            newPassword[randomIndex] = newPassword[randomIndex].toUpperCase()
        })
    }

    return newPassword.join('')
}

module.exports = addCapitalLetters;