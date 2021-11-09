import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    surname: "",
    email: "",
  },
  pending: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registrationStart: (state) => {
      state.pending = true;    
    },
    registrationEnd: (state,action) => {
      state.pending = false;
    }
    
  },
});

export const { registrationStart, registrationEnd } = userSlice.actions;
export default userSlice.reducer;
