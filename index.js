const express = require('express')
const apiRoutes = require('./routers/app.routers')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)
app.use(cors())
const server = app.listen(PORT, () => {
    console.log('servidor HTTP');
})

server.on('error', (err) => {
    console.log(err.message);
})