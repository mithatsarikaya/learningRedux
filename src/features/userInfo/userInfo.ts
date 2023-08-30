import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoState {
  name: string;
  age: number;
}

const initialState: UserInfoState = {
  name: "",
  age: 0,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getName: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = action.payload;
    },
    getAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getName, getAge } = userInfoSlice.actions;

export default userInfoSlice.reducer;
