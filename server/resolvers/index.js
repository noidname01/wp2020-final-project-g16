// Dependencies
const uuidv4 = require('uuid/v4')
const User = require('../models/users')
const Template = require('../models/templates')
const Sent = require('../models/sents')
const Draft = require('../models/drafts')

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		getUser: async (username, password) => {
			let data = null
			data = await User.find({ username: username, password: password })
			console.log(data)
			return data
		},
		getTemplate: () => {},
		getDraft: () => {},
		getSent: () => {},
	},
	Mutation: {
		createUser: async (input) => {
			User.create(input, function (err, msg) {
				if (err) throw err
				else {
					console.log(msg)
					console.log('User Created!')
				}
			})
			return input
		},
		createTemplate: () => {},
		createDraft: () => {},
		createSent: () => {},
	},
}
