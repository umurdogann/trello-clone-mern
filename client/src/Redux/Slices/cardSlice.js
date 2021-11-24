import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cardId: '',
	title: '',
	labels: [],
	members: [],
	watchers: [],
	activities: [],
	owner: '',
	description: '',
	pending: false,
};

const cardsSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		reset: (state) => initialState,
		setPending: (state, action) => {
			state.pending = action.payload;
		},
		setCard: (state, action) => {
			state.cardId = action.payload._id;
			state.title = action.payload.title;
			state.labels = action.payload.labels;
			state.members = action.payload.members;
			state.watchers = action.payload.watchers;
			state.activities = action.payload.activities;
			state.owner = action.payload.owner;
			state.listTitle = action.payload.listTitle;
			state.listId = action.payload.listId;
			state.boardId = action.payload.boardId;
			state.description = action.payload.description;
		},
		updateTitle: (state, action) => {
			state.title = action.payload;
		},
		updateDescription: (state, action) => {
			state.description = action.payload;
		},
		addComment: (state, action) => {
			state.activities = action.payload;
		},
		updateComment: (state, action) => {
			const { commentId, text } = action.payload;
			state.activities = state.activities.map((activity) => {
				if (activity._id === commentId) {
					activity.text = text;
				}
				return activity;
			});
		},
		deleteComment: (state, action) => {
			state.activities = state.activities.filter((act) => act._id !== action.payload);
		},
		addMember: (state, action) => {
			const { memberId, memberName } = action.payload;
			state.members.unshift({ user: memberId, name: memberName });
		},
		deleteMember: (state, action) => {
			const { memberId } = action.payload;
			state.members = state.members.filter((member) => member.user !== memberId);
		},
		createLabel: (state,action)=> {
			const {text,color,backColor} = action.payload;
			state.labels.unshift({text,color,backColor,selected:true})
		},
		updateLabel: (state, action) => {
			const { labelId, text, color, backColor } = action.payload;
			state.labels = state.labels.map((label) => {
				if (label._id === labelId) {
					label.text = text;
					label.color = color;
					label.backColor = backColor;
				}
				return label;
			});
		},
		deleteLabel: (state, action) => {
			state.labels = state.labels.filter((label) => label._id !== action.payload);
		},
		updateLabelSelection: (state, action) => {
			const { labelId, selected } = action.payload;
			state.labels = state.labels.map((label) => {
				if (label._id === labelId) {
					label.selected = selected;
				}
				return label;
			});
		},
	},
	
});

export const {
	reset,
	setPending,
	setCard,
	updateTitle,
	updateDescription,
	addComment,
	updateComment,
	deleteComment,
	addMember,
	deleteMember,
	createLabel,
	updateLabel,
	deleteLabel,
	updateLabelSelection,
} = cardsSlice.actions;
export default cardsSlice.reducer;
