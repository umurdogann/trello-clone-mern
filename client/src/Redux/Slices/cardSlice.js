import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cardId: '',
	title: '',
	labels: [],
	members: [],
	watchers: [],
	activities: [],
	checklists: [],
	owner: '',
	description: '',
	date: {
		startDate: null,
		dueDate: null,
		dueTime: null,
		completed: false,
	},
	attachments: [],
	cover: {
		color: null,
		isSizeOne: null,
	},
	colors: [
		{ bg: '#61bd4f', hbg: '#519839' },
		{ bg: '#f2d600', hbg: '#d9b51c' },
		{ bg: '#ff9f1a', hbg: '#cd8313' },
		{ bg: '#eb5a46', hbg: '#b04632' },
		{ bg: '#c377e0', hbg: '#89609e' },
		{ bg: '#0079bf', hbg: '#055a8c' },
		{ bg: '#344563', hbg: '#172b4d' },
		{ bg: '#ff78cb', hbg: '#c75bad' },
	],
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
			state.checklists = action.payload.checklists;
			state.date = action.payload.date;
			state.attachments = action.payload.attachments;
			state.cover = action.payload.cover;
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
			const { memberId, memberName, memberColor } = action.payload;
			state.members.unshift({ user: memberId, name: memberName, color: memberColor });
		},
		deleteMember: (state, action) => {
			const { memberId } = action.payload;
			state.members = state.members.filter((member) => member.user !== memberId);
		},
		createLabel: (state, action) => {
			const { _id, text, color, backColor } = action.payload;
			state.labels.unshift({ _id, text, color, backColor, selected: true });
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
		updateCreatedLabelId: (state, action) => {
			state.labels = state.labels.map((label) => {
				if (label._id === 'notUpdated') {
					label._id = action.payload;
				}
				return label;
			});
		},
		createChecklist: (state, action) => {
			const { _id, title } = action.payload;
			state.checklists.push({ _id, title, items: [] });
		},
		updateCreatedChecklist: (state, action) => {
			state.checklists = state.checklists.map((checklist) => {
				if (checklist._id === 'notUpdated') {
					checklist._id = action.payload;
				}
				return checklist;
			});
		},
		deleteChecklist: (state, action) => {
			state.checklists = state.checklists.filter((list) => list._id !== action.payload);
		},
		addChecklistItem: (state, action) => {
			const { checklistId, _id, text } = action.payload;
			state.checklists = state.checklists.map((list) => {
				if (list._id.toString() === checklistId.toString()) {
					list.items.push({ _id: _id, text: text, completed: false });
				}
				return list;
			});
		},
		updateAddedChecklistItemId: (state, action) => {
			const { checklistId, checklistItemId } = action.payload;
			state.checklists = state.checklists.map((list) => {
				if (list._id.toString() === checklistId.toString()) {
					list.items[list.items.length - 1]._id = checklistItemId;
				}
				return list;
			});
		},
		setChecklistItemCompleted: (state, action) => {
			const { checklistId, checklistItemId, completed } = action.payload;
			state.checklists = state.checklists.map((list) => {
				if (list._id.toString() === checklistId.toString()) {
					list.items = list.items.map((item) => {
						if (item._id === checklistItemId) {
							item.completed = completed;
						}
						return item;
					});
				}
				return list;
			});
		},
		setChecklistItemText: (state, action) => {
			const { checklistId, checklistItemId, text } = action.payload;
			state.checklists = state.checklists.map((list) => {
				if (list._id.toString() === checklistId.toString()) {
					list.items = list.items.map((item) => {
						if (item._id === checklistItemId) {
							item.text = text;
						}
						return item;
					});
				}
				return list;
			});
		},
		deleteChecklistItem: (state, action) => {
			const { checklistId, checklistItemId } = action.payload;
			state.checklists = state.checklists.map((list) => {
				if (list._id.toString() === checklistId.toString()) {
					list.items = list.items.filter((item) => item._id !== checklistItemId);
				}
				return list;
			});
		},
		updateStartDueDates: (state, action) => {
			const { startDate, dueDate, dueTime } = action.payload;
			state.date.startDate = startDate;
			state.date.dueDate = dueDate;
			state.date.dueTime = dueTime;
			if (dueDate === null) state.date.completed = false;
		},
		updateDateCompleted: (state, action) => {
			state.date.completed = action.payload;
		},
		addAttachment: (state, action) => {
			const { link, name, _id,date } = action.payload;
			state.attachments.push({ link: link, name: name, _id:_id, date: date });
		},
		updateAddedAttachmentId: (state, action) => {
			state.attachments = state.attachments.map(attachment =>{
				if(attachment._id === 'notUpdated'){
					attachment._id = action.payload;
				}
				return attachment;
			})
		},
		deleteAttachment: (state, action) => {
			state.attachments = state.attachments.filter((attachment) => attachment._id !== action.payload);
		},
		updateAttachment: (state,action) => {
			const {attachmentId, link, name} = action.payload;
			state.attachments = state.attachments.map(attachment =>{
				if(attachment._id === attachmentId){
					attachment.link = link;
					attachment.name = name;
				}
				return attachment;
			})
		},
		updateCover: (state, action) => {
			const {color, isSizeOne} = action.payload;
			state.cover.color = color;
			state.cover.isSizeOne = isSizeOne;
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
	updateCreatedLabelId,
	createChecklist,
	updateCreatedChecklist,
	deleteChecklist,
	addChecklistItem,
	updateAddedChecklistItemId,
	setChecklistItemCompleted,
	setChecklistItemText,
	deleteChecklistItem,
	updateStartDueDates,
	updateDateCompleted,
	addAttachment,
	updateAddedAttachmentId,
	deleteAttachment,
	updateAttachment,
	updateCover,
} = cardsSlice.actions;
export default cardsSlice.reducer;
