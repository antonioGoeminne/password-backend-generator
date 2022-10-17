const addRandomData = require("./utils/addRandomData");

const addSymbols = (password) => {

    const SYMBOLS = ['#', '@', '&', '$', '%', '!!', '?¡¿', '=', '//', '*' , '[' , '|', '<', '>']

    const newPassword = addRandomData({ length: password.length, dataLength: SYMBOLS.length, dataToAdd: SYMBOLS, oldPassword: password })

    return newPassword
}

module.exports = addSymbols;