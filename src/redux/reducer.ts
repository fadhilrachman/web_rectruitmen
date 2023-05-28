import { combineReducers } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
const rootReducer = combineReducers({
  Job: jobSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
