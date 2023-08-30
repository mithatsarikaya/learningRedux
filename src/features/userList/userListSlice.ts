import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TUserListState = {
  name: string;
  id: string;
}[];

const initialState: TUserListState = [
  { name: "Mithat", id: "1" },
  { name: "Ismail", id: "2" },
  { name: "Yusuf", id: "3" },
];

export const userListSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    filterUserList: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = state.filter((s) => s.id == action.payload);
    },
    // getAge: (state, action: PayloadAction<number>) => {
    //   state.age = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { filterUserList } = userListSlice.actions;

export default userListSlice.reducer;
