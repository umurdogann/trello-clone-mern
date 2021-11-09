import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isAuthenticated: null,
  pending: false,
  token: localStorage.getItem("token"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registrationStart: (state) => {
      state.pending = true;
    },
    registrationEnd: (state) => {
      state.pending = false;
    },
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload.user;
      state.token = action.payload.user.token;
      localStorage.setItem("token", action.payload.user.token);
    },
    loginFailure: (state) => {
      state.pending = false;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const {
  registrationStart,
  registrationEnd,
  loginStart,
  loginFailure,
  loginSuccess,
} = userSlice.actions;
export default userSlice.reducer;
