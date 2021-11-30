import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	title: '',
	backgroundImageLink: '',
	lists: [],
	members: [],
	activity: [],
	loading: true,
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
		},
		updateTitle: (state,action) => {
			state.title = action.payload;
		}
	},
});

export const { setLoading, successFetchingBoard, updateTitle } = boardSlice.actions;
export default boardSlice.reducer;
