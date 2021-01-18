const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DraftSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    draftId: {
        type: String,
        required: true,
    },
    templateId: {
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
