"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ErrorState {
  error: string;
}

const initialState: ErrorState = {
  error: "",
};

export const errorReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorReducer.actions;

export default errorReducer.reducer;
