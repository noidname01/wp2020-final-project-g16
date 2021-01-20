// Dependencies
const uuidv4 = require('uuid/v4')
const User = require('../models/users')
const Template = require('../models/templates')
const Sent = require('../models/sents')
const Draft = require('../models/drafts')

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		checkUsername: async (parent, args, context, info) => {
			let result = await User.findOne({ username: args.username })
			if (!args.username) {
				return false
			}
			if (!result) {
				return true
			} else {
				return false
			}
		},
		getUser: async (parent, args, context, info) => {
			let data = null
			data = await User.find({
				username: args.username,
				password: args.password,
			})
			return data
		},
		getTemplate: async (parent, args, context, info) => {
			let data = null
			data = await Template.find({
				userId: args.userId,
			})
			return data
		},
		getDraft: async (parent, args, context, info) => {
			let data = null
			data = await Draft.find({
				userId: args.userId,
			})
			return data
		},
		getSent: async (parent, args, context, info) => {
			let data = null
			data = await Sent.find({
				userId: args.userId,
			})
			return data
		},
	},
	Mutation: {
		lookupTemplate: async (parent, args, context, info) => {
			let data = null
			data = await Template.find({ userId: args.userId })
			console.log(data)
			return data
		},
		deleteTemplate: async (parent, args, context, info) => {
			let data = null
			data = await Template.find({ id: args.id }, (err, res) => {
				if (err) {
					throw err
				} else {
					Template.remove({ id: args.id }, (err, res) => {
						if (err) {
							throw err
						} else {
							console.log('=====Template Deleted=====')
						}
					})
				}
			})
			console.log(data)
			return data
		},

		createUser: async (parent, args, context, info) => {
			User.create(args.data, function (err, msg) {
				if (err) throw err
			})
			return args.data
		},
		createTemplate: async (parent, args, context, info) => {
			Template.create(args.data, function (err, msg) {
				if (err) throw err
			})
			return args.data
		},
		createDraft: async (parent, args, context, info) => {
			Draft.create(args.data, function (err, msg) {
				if (err) throw err
			})
			return args.data
		},
		createSent: async (parent, args, context, info) => {
			Sent.create(args.data, function (err, msg) {
				if (err) throw err
			})
			return args.data
		},
		deleteUser: async (parent, args, context, info) => {
			let userInfo = await User.find(
				{ id: args.id },
				function (err, res) {
					if (err) {
						throw err
					} else {
						User.remove({ id: args.id }, function (err, result) {
							if (err) {
								throw err
							} else {
								console.log('===== USER REMOVED =====')
							}
						})
					}
				}
			)
			return userInfo
		},
		modifyUser: async (parent, args, context, info) => {
			let userInfo = await User.find(
				{ id: args.data.id },
				function (err, res) {
					if (err) {
						throw err
					} else {
						User.remove(
							{ id: args.data.id },
							function (err, result) {
								if (err) {
									throw err
								} else {
									console.log('===== USER REMOVED =====')
								}
							}
						)
					}
				}
			)
			User.create(args.data, function (err, msg) {
				if (err) throw err
			})
			return args.data
		},
	},
}

module.exports = { resolvers }
