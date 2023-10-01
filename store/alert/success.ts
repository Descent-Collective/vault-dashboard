"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SuccessState {
  success: string;
}

const initialState: SuccessState = {
  success: "",
};

export const successReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSuccess: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
    },
  },
});

export const { setSuccess } = successReducer.actions;

export default successReducer.reducer;
