import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../reducers/Loginreducer";


export const store = configureStore({
  reducer: {
    loginReducer: LoginSlice.reducer

  }
})