import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  pronouns: "",
  DOB: "",
  error: null,
  forgot: false,
  verify: false
};

const regSlice = createSlice({
  name: "reg",
  initialState: { value: initialState },
  reducers: {
    setEmail: (state, action) => {
      state.value.email = action.payload;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload;
    },
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setPronouns: (state, action) => {
      state.value.pronouns = action.payload;
    },
    setDOB: (state, action) => {
      state.value.DOB = action.payload;
    },
    resetForm: (state) => {
      state.value.name = "";
      state.value.email = "";
      state.value.password = "";
    },
    regFailure: (state, action) => {
      state.error = action.payload;
    },
    forgot: (state, action) => {
      state.forgot = action.payload;
    },
    verify: (state, action) => {
      state.verify = action.payload;
    }
  }
});

export const {
  setEmail,
  setPassword,
  setName,
  regFailure,
  resetForm,
  setDOB,
  setPronouns,
  forgot,
  verify
} = regSlice.actions;

export default regSlice.reducer;
