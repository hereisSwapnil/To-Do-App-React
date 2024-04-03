import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

// The store will be created with the todoSlice reducer.
export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
