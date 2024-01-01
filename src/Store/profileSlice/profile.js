import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  DOB: "",
  pronouns: "",
  currentSettings: ""
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDOB: (state, action) => {
      state.DOB = action.payload;
    },
    setPronouns: (state, action) => {
      state.pronouns = action.payload;
    },
    setCurrentSettings: (state, action) => {
      state.currentSettings = action.payload;
    }
  }
});

export const { setName, setEmail, setDOB, setPronouns, setCurrentSettings } =
  profileSlice.actions;

export default profileSlice.reducer;
