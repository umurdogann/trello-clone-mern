import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cardId: '',
	title: '',
	labels: [],
	members: [],
	watchers: [],
	activities: [],
	owner: '',
	loading: false,
};

const cardsSlice = createSlice({
	name: 'card',
	initialState,
    reset: (state) => initialState,
	reducers: {		
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { reset, setLoading } = cardsSlice.actions;
export default cardsSlice.reducer;
