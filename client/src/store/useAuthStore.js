import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

export const useAuthStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
