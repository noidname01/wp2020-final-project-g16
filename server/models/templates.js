const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TemplateSchema = new Schema({
    templateId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
})

const Template = mongoose.model('template', TemplateSchema)

module.exports = Template
