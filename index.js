require('dotenv-defaults').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// ========= Apollo(GraphQL) ======
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./server/schema')
const { resolvers } = require('./server/resolvers')
// ========= Apollo(GraphQL) ======

// =========require mailer ==========
const mailer = require('./server/mailer/mailer.js')

const playground = true

const server = new ApolloServer({ typeDefs, resolvers, playground })

const app = express()

server.applyMiddleware({ app })

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'client/dist')))

app.post('/sendMails', (req, res) => {
    const { userinfo, subject, to, html } = req.body
    const { emailAddress, emailPassword } = userinfo
    const transporterConfig = {
        host: 'smtp.gmail.com',
        user: emailAddress,
        pass: emailPassword,
    }

    const mailOption = {
        from: emailPassword,
        to: to,
        subject: subject,
        html: html,
    }

    let mailer1 = new mailer(transporterConfig, mailOption)

    mailer1.sendMail(res)
})

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'))
})

// //===========================Login DB==================================

// DB Config
// const db = require('./server/config/keys').MongoURI

// DB Connection

if (!process.env.MONGO_URL) {
    console.error('Missing MONGO_URL!!!')
    process.exit(1)
}

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Mongo Connected! Path:', process.env.ROOTPATH))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000
app.listen(port)
