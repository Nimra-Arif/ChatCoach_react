import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: { value: initialState },
  reducers: {
    setEmail: (state, action) => {
      state.value.email = action.payload;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload;
    },
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.value.email = "";
      state.value.password = "";
    },
    logout: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
    }
  }
});

export const {
  setEmail,
  setPassword,
  loginFailure,
  loginStart,
  loginSuccess,
  logout
} = authSlice.actions;

export default authSlice.reducer;
