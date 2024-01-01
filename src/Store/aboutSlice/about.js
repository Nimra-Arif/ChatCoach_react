import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: false
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    toggleAbout: (state, action) => {
      state.about = action.payload;
    }
  }
});
export const { toggleAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
