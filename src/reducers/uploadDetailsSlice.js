import { createSlice } from "@reduxjs/toolkit";

export const uploadSlice = createSlice({
  name: "User-Data",
  initialState: {
    uploadData: null,
  },
  reducers: {
    uploadData: (state, action) => action.payload
  }
})

export default uploadSlice