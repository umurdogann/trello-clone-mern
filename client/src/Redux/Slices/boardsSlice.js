import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardsData: null,
  pending: true,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    startFetchingBoards: (state) => {
      state.pending = true;
    },
    successFetchingBoards: (state, action) => {
      state.boardsData = action.payload.boards;
      state.pending = false;
    },
    failFetchingBoards: (state) => {
      state.pending = false;
    },
  },
});

export const {
  startFetchingBoards,
  successFetchingBoards,
  failFetchingBoards,
} = boardsSlice.actions;
export default boardsSlice.reducer;
