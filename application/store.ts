"use client";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import errorReducer from "./alert/error";
import successReducer from "./alert/success";
import infoReducer from "./alert/info";

export interface CallbackProps {
  onSuccess?: Function;
  onError?: Function;
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    success: successReducer,
    info: infoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState}
export type AppDispatch = typeof store.dispatch;
