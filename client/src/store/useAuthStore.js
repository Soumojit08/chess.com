import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const useAuthStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});
