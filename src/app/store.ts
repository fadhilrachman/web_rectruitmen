import { configureStore } from "@reduxjs/toolkit";
import RootState from "@/redux/reducer";
const store = configureStore({
  reducer: RootState,
});

export default store;
