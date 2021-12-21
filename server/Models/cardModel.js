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
			text: {
				type: String,
			},
			color: {
				type: String,
			},
			backColor: {
				type: String,
			},
			selected: {
				type: Boolean,
			},
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
			color:{
				type:String,
			}
		},
	],
	watchers: [
		{
			user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
			name: {
				type: String,
			},
		},
	],
	date: {
		_id: false,
		startDate: {
			type: Date,
		},
		dueDate: {
			type: Date,
		},
		dueTime: {
			type: String,
		},
		reminder: {
			type: Boolean,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	attachments: [
		{
			link: {
				type: String,
			},
			name: {
				type: String,
				default: null,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
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
				default: Date.now,
			},
			isComment: {
				type: Boolean,
				default: false,
			},
			color: {
				type: String,
			},
		},
	],
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'list',
	},
	cover: {
		color: {
			type: String,
			default: null,
		},
		isSizeOne: {
			type: Boolean,
			default: null,
		},
	},
	checklists: [
		{
			title: {
				type: String,
			},
			items: [
				{
					text: {
						type: String,
					},
					completed: {
						type: Boolean,
						default: false,
					},
				},
			],
		},
	],
});

module.exports = mongoose.model('card', cardSchema);
