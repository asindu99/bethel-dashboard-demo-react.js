import { createSlice } from "@reduxjs/toolkit";


export const toggleSidebarSlice = createSlice({
  name: "toggle-side",
  initialState: {
    toggleSidebar: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar
    }
  }
})

export default toggleSidebarSlice