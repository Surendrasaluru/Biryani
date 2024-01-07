import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User Feature/userSlice";
import cartReducer from "./Cart Feature/CartSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default Store;
