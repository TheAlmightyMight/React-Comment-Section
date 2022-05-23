import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "../slices/commentSlice";

export const store = configureStore({
  reducer: {
    comment: commentSlice,
  },
});
