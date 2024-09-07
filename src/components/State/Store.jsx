import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckOutSlice";
import cartReducer from "./Slice/CartSlice";

// เมื่อมีการเรียกใช้ store.dispatch กับ action stateของ checkout และ cart จะถูก re-render ด้วย CheckOutReducer และ cartReducer
export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: cartReducer,
  },
});
