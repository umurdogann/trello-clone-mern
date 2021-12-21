import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "error",
  message: "",
  duration: 3000,
  nextRoute: null,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.duration = action.payload.duration
        ? action.payload.duration
        : initialState.duration;
      state.nextRoute = action.payload.nextRoute
        ? action.payload.nextRoute
        : null;
    },
    closeAlert: (state) => {
      state.open = false;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
