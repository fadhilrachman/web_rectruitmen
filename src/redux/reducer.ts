import { combineReducers } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import UserSlice from "./UserSlice";
import ApplicationSlice from "./Application";
const rootReducer = combineReducers({
  Job: jobSlice,
  User: UserSlice,
  Application: ApplicationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
