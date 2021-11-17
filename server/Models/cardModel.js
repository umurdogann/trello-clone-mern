const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	description: {
		type: String,
	},
	labels: [
		{
			type: String,
		},
	],
	members: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			name: {
				type: String,
			},
		},
	],
	watchers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			name: {
				type: String,
			},
		},
	],
	date: {
		startDate: {
			type: Date,
		},
		dueDate: {
			type: Date,
		},
		reminder: {
			type: Boolean,
		},
	},
	activities: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			name: {
				type: String,
			},
			date: {
				type: Date,
			},
			isComment: {
				type: Boolean,
			},
		},
	],
});

module.exports = mongoose.model('card', cardSchema);
