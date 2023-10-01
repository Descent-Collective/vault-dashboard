"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UserResponse } from "./types";

export interface UserState {
  user: UserResponse | undefined;
  loading: boolean;
}

const initialState: UserState = {
  user: { name: "Justice" },
  loading: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { setLoading, setUser } = userReducer.actions;

export default userReducer.reducer;
