import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	title: '',
	backgroundImageLink: '',
	lists: [],
	members: [],
	activity: [],
	loading: true,
	description: '',
	activityLoading: false,
};

const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		successFetchingBoard: (state, action) => {
			state.id = action.payload._id;
			state.title = action.payload.title;
			state.backgroundImageLink = action.payload.backgroundImageLink;
			state.lists = action.payload.lists;
			state.members = action.payload.members;
			state.activity = action.payload.activity;
			state.description = action.payload.description;
		},
		updateTitle: (state, action) => {
			state.title = action.payload;
		},
		setActivityLoading: (state, action) => {
			state.activityLoading = action.payload;
		},
		updateActivity: (state, action) => {
			state.activity = action.payload;
		},
		updateDescription: (state, action) => {
			state.description = action.payload;
		},
	},
});

export const { setLoading, successFetchingBoard, updateTitle, setActivityLoading, updateActivity, updateDescription } =
	boardSlice.actions;
export default boardSlice.reducer;
