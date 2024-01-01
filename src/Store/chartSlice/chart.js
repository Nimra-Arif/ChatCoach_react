import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    chartData: [],
    userLineData: [],
    botLineData: [],
    loading: false,
    error: null
  },
  reducers: {
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserLineData: (state, action) => {
      state.userLineData = action.payload;
    },
    setBotLineData: (state, action) => {
      state.botLineData = action.payload;
    }
  }
});

export const {
  setChartData,
  setLoading,
  setError,
  setUserLineData,
  setBotLineData
} = chartSlice.actions;

export default chartSlice.reducer;
