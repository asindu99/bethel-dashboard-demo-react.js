import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../reducers/Loginreducer";
import userDataSlice from "../reducers/userDataReducer";


export const store = configureStore({
  reducer: {
    loginReducer: LoginSlice.reducer,
    userDataReducer: userDataSlice.reducer

  }
})