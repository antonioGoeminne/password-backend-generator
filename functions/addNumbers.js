const addRandomData = require('./utils/addRandomData')

const addNumbers = (password) => {

    const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const newPassword = addRandomData({ length: password.length, dataLength: NUMBERS.length, dataToAdd: NUMBERS, oldPassword: password })

    return newPassword
}

module.exports = addNumbers;