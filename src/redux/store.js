import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sideNavReducer from "./sideNavSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    sideNav: sideNavReducer,
  },
});
