const express = require('express')
const cors = require('cors')
const apiRoutes = require('./routers/app.routers')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use('/api', apiRoutes)
const server = app.listen(PORT, () => {
    console.log('servidor HTTP');
})

server.on('error', (err) => {
    console.log(err.message);
})