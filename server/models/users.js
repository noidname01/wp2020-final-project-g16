const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    userId: {
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
