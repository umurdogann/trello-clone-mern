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
        updateTitle: (state,action) => {
            state.title = action.payload;
        },
		updateDescription: (state,action)=>{
			state.description = action.payload;
		}
	},
});

export const { reset, setPending, setCard, updateTitle,updateDescription } = cardsSlice.actions;
export default cardsSlice.reducer;
