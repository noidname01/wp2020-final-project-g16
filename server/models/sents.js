const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SentSchema = new Schema({
    sentId: {
        type: String,
        required: true,
    },
    draftContent: {
        type: String,
        required: true,
    },
})

const Sent = mongoose.model('sent', SentSchema)

module.exports = Sent
