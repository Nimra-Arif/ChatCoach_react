import { configureStore } from "@reduxjs/toolkit";

import msgReducer from "./msgSlice/msg";
import chatNavReducer from "./chatNavSlice/chat";
import logReducer from "./logSlice/log";
import authReducer from "./authSlice/auth";
import regReducer from "./regSlice/reg";
import profileReducer from "./profileSlice/profile";
import accountReducer from "./accountSlice/account";
import chartReducer from "./chartSlice/chart";
import proReducer from "./proSLice/pro";
import aboutReducer from "./aboutSlice/about";

const store = configureStore({
  reducer: {
    msg: msgReducer,
    chat: chatNavReducer,
    log: logReducer,
    auth: authReducer,
    reg: regReducer,
    profile: profileReducer,
    account: accountReducer,
    chart: chartReducer,
    pro: proReducer,
    about: aboutReducer
  }
});

export default store;
