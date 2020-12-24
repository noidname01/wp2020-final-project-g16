const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

// =========require test ==========
// const mailer = require('./server/test/mailer.js')
//
// =========require files =========
const sendMails = require('./server/sendMails')
// =========require files =========

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'client/dist')))

//==============================routes=================================
//===========================Test Routes ==============================
/* app.post('/mailTest', (req, res) => {
    const { transporterConfig, mailOption } = req.body
    console.log(req.body)
    let mailer1 = new mailer(transporterConfig, mailOption)

    mailer1.sendMail(res)
})
 */
//===========================Test Routes ==============================

app.post('/sendMails', (req, res) => {})

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
    // next()
})

//==============================routes=================================
const port = process.env.PORT || 5000
app.listen(port)
