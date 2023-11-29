import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../reducers/Loginreducer";
import userDataSlice from "../reducers/userDataReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";



const persistConfig = {
  key: 'root',
  storage: storage,
}


const reducer = combineReducers({
  loginReducer: LoginSlice.reducer,
  userDataReducer: userDataSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer);



export const store = configureStore({
  reducer: persistedReducer
})