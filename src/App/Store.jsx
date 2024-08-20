import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Features/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer: bookReducer,
  },
});

export default store;
