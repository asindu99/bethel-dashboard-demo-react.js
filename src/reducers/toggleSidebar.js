import { createSlice } from "@reduxjs/toolkit";


export const toggleSidebarSlice = createSlice({
  name: "toggle-side",
  initialState: {
    toggleSidebar: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar
    }
  }
})

export default toggleSidebarSlice