const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const flash = require('connect-flash')
// const session = require('express-session')
// const passport = require('passport')

// ========= Apollo(GraphQL) ======
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./server/schema')
const { resolvers } = require('./server/resolvers')
// ========= Apollo(GraphQL) ======

// =========require test ==========
// const mailer = require('./server/test/mailer.js')
//
// =========require files =========
const sendMails = require('./server/sendMails')
// =========require files =========

const playground = true

const server = new ApolloServer({ typeDefs, resolvers, playground })

const app = express()

server.applyMiddleware({ app })

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

// //===========================Login DB==================================
// Passport Config
// require('./server/config/passport')(passport)

// DB Config
const db = require('./server/config/keys').MongoURI

// DB Connection
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo Connected!'))
    .catch((err) => console.log(err))

// Express Session
// app.use(
//     session({
//         secret: 'keyboard cat',
//         resave: true,
//         saveUninitialized: true,
//     })
// )

// Passport Middleware
// app.use(passport.initialize())
// app.use(passport.session())

// // Connect Flash
// app.use(flash())

// Global Vars
/*app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})*/

//==============================routes=================================
const port = process.env.PORT || 5001
app.listen(port)
