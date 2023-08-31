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
      return state.filter((s) => s.id == action.payload);
    },
    unfilteredUserList: () => {
      return initialState;
    },
    // getAge: (state, action: PayloadAction<number>) => {
    //   state.age = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { filterUserList, unfilteredUserList } = userListSlice.actions;

export default userListSlice.reducer;
