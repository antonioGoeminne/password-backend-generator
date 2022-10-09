const getRandom = ({ length }) => {

    let random = Math.random()
    random = random * length

    const randomIndex = Math.floor(random)

    return randomIndex
}

module.exports = getRandom;