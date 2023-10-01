"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InfoState {
  info: string;
}

const initialState: InfoState = {
  info: "",
};

export const infoReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<string>) => {
      state.info = action.payload;
    },
  },
});

export const { setInfo } = infoReducer.actions;

export default infoReducer.reducer;
