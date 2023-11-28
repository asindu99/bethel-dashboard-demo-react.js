import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "Login-Data",
  initialState: {
    loginData: null,
  },
  reducers: {
    saveUser: (state, action) => action.payload
  }
})

export default LoginSlice