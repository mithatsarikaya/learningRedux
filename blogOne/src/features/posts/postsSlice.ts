import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TPostObject = {
  id: string;
  title: string;
  content: string;
};

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: {
      reducer: (state, action: PayloadAction<TPostObject>) => {
        state.push(action.payload);
      },
      prepare: (payloadObj) => {
        let id = new Date().getTime().toString();
        return { payload: { ...payloadObj, id } };
      },
    },
    deleteAPost: (state, action) => {
      return state.filter((s) => s.id != action.payload);
    },
  },
});

export const getAllPosts = (state: RootState) => state.posts;

export const { addNewPost, deleteAPost } = postsSlice.actions;

export default postsSlice.reducer;
