import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allLists: [],
	loadingListService: true,
};

const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loadingListService = action.payload;
		},
		successCreatingList: (state, action) => {
			state.allLists.push(action.payload);
		},
		successFetchingLists: (state, action) => {
			state.allLists = action.payload;
		},
		successDeletingList: (state, action) => {
			state.allLists = state.allLists.filter((list) => list._id !== action.payload);
		},
		successCreatingCard: (state, action) => {
			state.allLists = state.allLists.map((list) => {
				if (list._id === action.payload.listId) {
					return action.payload.updatedList;
				}
				return list;
			});
		},
		updateCardDragDrop: (state, action) => {
			state.allLists = action.payload;
		},
		updateListDragDrop: (state, action) => {
			state.allLists = action.payload;
		},
	},
});

export const {
	setLoading,
	successCreatingList,
	successFetchingLists,
	successDeletingList,
	successCreatingCard,
	updateCardDragDrop,
	updateListDragDrop,
} = listSlice.actions;

export default listSlice.reducer;
