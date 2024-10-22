const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DraftSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    sent: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    templateId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    xlsxContent: {
        type: String,
        required: true,
    },
})

const Draft = mongoose.model('draft', DraftSchema)

module.exports = Draft
