const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    emailPassword: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('user', UserSchema)

module.exports = User
