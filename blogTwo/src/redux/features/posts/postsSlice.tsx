import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDirectoryToStaticUrl } from "../../../statics/apiUrl";
import { RootState } from "../../app/store";

let postUrl = "posts";

export type TPostsArray = TPost[];

export interface TPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// First, create the thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(addDirectoryToStaticUrl(postUrl));

  if (!response.ok) {
    return Promise.reject(response.status);
  }

  const resJson = await response.json();
  return resJson;
});

interface PostsState {
  entities: TPostsArray;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

const initialState = {
  entities: [],
  status: "idle",
  error: "",
} as PostsState;

// Then, handle actions in your reducers:
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message as string;
    });
  },
});

export const getAllPosts = (state: RootState) => state.posts.entities;
export const getPostStatus = (state: RootState) => state.posts.status;
export const getPostError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;

// Action creators are generated for each case reducer function
