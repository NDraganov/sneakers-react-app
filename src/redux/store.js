import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
