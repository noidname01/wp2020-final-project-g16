const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SentSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	draftId: {
		type: String,
		required: true,
	},
})

const Sent = mongoose.model('sent', SentSchema)

module.exports = Sent
