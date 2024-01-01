import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pro: false,
  plan: 2,
  unSub: false
};

const proSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {
    setPro: (state, action) => {
      state.pro = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setUnSub: (state, action) => {
      state.unSub = action.payload;
    }
  }
});

export const { setPro, setPlan, setUnSub } = proSlice.actions;

export default proSlice.reducer;
