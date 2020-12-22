const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const mailer = require('./server/mailer.js')
const { nextTick } = require('process')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/dist')))

//routes

app.post('/mailTest', (req, res) => {
    const { transporterConfig, mailOption } = req.body
    console.log(req.body)
    let mailer1 = new mailer(transporterConfig, mailOption)

    mailer1.sendMail(res)
})

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
    // next()
})

const port = process.env.PORT || 5000
app.listen(port)
