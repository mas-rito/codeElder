import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./slices/cursorSlices";

const store = configureStore({
  reducer: {
    cursor: cursorReducer,
  },
});

export default store;
