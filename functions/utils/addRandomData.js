const getRandom = require('../getRandom')

const addRandomData = ({ length, dataLength, dataToAdd, oldPassword }) => {

    let newPassword = oldPassword.split('')

    {
        [...Array(Math.round(length / 2))].forEach(el => {
            let randomIndex = getRandom({ length: length })
            newPassword[randomIndex] = dataToAdd[getRandom({ length: dataLength })]
        })
    }
    return newPassword.join('');
}

module.exports = addRandomData;