import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "User-Data",
  initialState: {
    userData: null,
  },
  reducers: {
    saveUserData: (state, action) => action.payload
  }
})

export default userDataSlice