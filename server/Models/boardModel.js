const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		backgroundImageLink: {
			type: String,
			required: true,
		},
		activity: [
			{
				action: {
					type: String,
				},
				date: {
					type: Date,
					default: Date.now(),
				},
			},
		],
		members: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'user',
				},
				name: {
					type: String,
				},
				surname: {
					type: String,
				},
				role: {
					type: String,
					default: 'member',
				},
			},
		],
		lists: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'list',
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('board', boardSchema);
