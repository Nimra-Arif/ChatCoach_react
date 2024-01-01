import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  currentSettings: "",
  account: false
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setCurrentSettings: (state, action) => {
      state.currentSettings = action.payload;
    }
  }
});

export const { setEmail, setAccount, setCurrentSettings } =
  accountSlice.actions;

export default accountSlice.reducer;
