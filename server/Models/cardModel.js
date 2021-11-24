const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		default: '',
	},
	labels: [
		{
			type: String,
		},
	],
	members: [
		{
			_id: false,
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'user',
				},
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
			userName: {
				type: String,
			},
			text: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now(),
			},
			isComment: {
				type: Boolean,
				default: false,
			},
		},
	],
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'list'
    }
});

module.exports = mongoose.model('card', cardSchema);
