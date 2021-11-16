const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	cards: [
		{
			title: {
				type: String,
				required: true,
			},
			cards: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'cards',
				},
			],
		},
	],
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'boards'
	}
});

module.exports = mongoose.model('list', listSchema);
