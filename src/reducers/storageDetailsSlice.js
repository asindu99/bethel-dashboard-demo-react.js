import { createSlice } from "@reduxjs/toolkit";

export const storageDataSlice = createSlice({
  name: "storage-data",
  initialState: {
    StorageData: null,
  },
  reducers: {
    saveStorageData: (state, action) => action.payload
  }
})

export default storageDataSlice