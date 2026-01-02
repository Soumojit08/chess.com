import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
  },
  reducers: {
    fetchUser: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { fetchUser } = authSlice.actions;
export default authSlice.reducer;
