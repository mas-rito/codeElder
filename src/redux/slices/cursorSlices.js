import { createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    data: [
      {
        isHover: false,
      },
    ],
  },
  reducers: {
    mouseEnter: (state) => {
      state.data[0].isHover = true;
    },
    mouseLeave: (state) => {
      state.data[0].isHover = false;
    },
  },
});

export const { mouseEnter, mouseLeave } = cursorSlice.actions;
export default cursorSlice.reducer;
