const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SentSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    draftId: {
        type: String,
        required: false,
    },
    subject: {
        type: String,
        required: true,
    },
})

const Sent = mongoose.model('sent', SentSchema)

module.exports = Sent
