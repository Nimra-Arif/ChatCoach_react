import { createSlice } from "@reduxjs/toolkit";

const initialState = "login";

const logSlice = createSlice({
  name: "log",
  initialState: { value: initialState },
  reducers: {
    setLog: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setLog } = logSlice.actions;

export default logSlice.reducer;
