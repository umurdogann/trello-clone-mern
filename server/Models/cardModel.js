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
			user: {type: mongoose.Schema.Types.ObjectId,
			ref: 'user'},
			name: {
				type: String,
			},
		},
	],
	watchers: [
		{
			user: {type: mongoose.Schema.Types.ObjectId,
			ref: 'user'},
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
			user: {type: mongoose.Schema.Types.ObjectId,
			ref: 'user'},
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
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'list'
    }
});

module.exports = mongoose.model('card', cardSchema);
