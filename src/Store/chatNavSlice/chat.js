import { createSlice } from "@reduxjs/toolkit";

const chatNavSLice = createSlice({
  name: "chatNav",
  initialState: {
    toggle: false,
    setting: false,
    botSelector: false,
    bot: {},
    bot_id: "",
    myProfile: false,
    loading: false,
    value: "Emotions",
    resetBot: true,
    analyticsMob: false
  },
  reducers: {
    setTab: (state, action) => {
      state.value = action.payload;
    },
    toggle: (state, action) => {
      state.toggle = action.payload;
    },
    setSetting: (state, action) => {
      state.setting = action.payload;
    },
    setBotSelector: (state, action) => {
      state.botSelector = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBot: (state, action) => {
      state.bot = action.payload;
    },
    setBotId: (state, action) => {
      state.bot_id = action.payload;
    },
    setMyProfile: (state, action) => {
      state.myProfile = action.payload;
    },
    resetBot: (state, action) => {
      state.resetBot = action.payload;
    },
    setAnalyticsMob: (state, action) => {
      state.analyticsMob = action.payload;
    }
  }
});

export const {
  setTab,
  setSetting,
  toggle,
  setBotSelector,
  setBot,
  setMyProfile,
  setBotId,
  setLoading,
  resetBot,
  setAnalyticsMob
} = chatNavSLice.actions;

export default chatNavSLice.reducer;
