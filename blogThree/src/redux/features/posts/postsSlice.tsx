import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDirectoryAndStringToStaticUrl,
  addDirectoryToStaticUrl,
  uniqueStringByTime,
} from "../../../statics/apiUrl";
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

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (blogData: TPost) => {
    const response = await fetch(addDirectoryToStaticUrl(postUrl), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      return Promise.reject(response.status);
    }

    const resJson = await response.json();
    console.log(resJson);
    return resJson;
  }
);

export const deleteAPost = createAsyncThunk(
  "posts/deletePost",
  async (postIDToDelete: string) => {
    console.log(addDirectoryAndStringToStaticUrl(postUrl, postIDToDelete));
    const response = await fetch(
      addDirectoryAndStringToStaticUrl(postUrl, postIDToDelete)
    );
    console.log("deleterespons", response);
    //this error ignored intentionally
    // if (!response.ok) {
    //   return Promise.reject(response.status);
    // }

    return postIDToDelete;
  }
);

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
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.status = "succeeded";

      //changing id to prevent repetitive of the 101. jsonplaceholder api always returns 101 as a id when we post a new blog.
      state.entities.push({ ...action.payload, id: uniqueStringByTime() });
    });
    builder.addCase(deleteAPost.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.entities = state.entities.filter(
        (blog) => blog.id != Number(action.payload)
      );
    });
  },
});

export const getAllPosts = (state: RootState) => state.posts.entities;
export const getPostStatus = (state: RootState) => state.posts.status;
export const getPostError = (state: RootState) => state.posts.error;
export const getPostByID = (state: RootState, postID: string) =>
  state.posts.entities.find((post) => post.id === Number(postID));

export default postsSlice.reducer;

// Action creators are generated for each case reducer function
