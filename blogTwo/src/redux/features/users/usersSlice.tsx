import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { addDirectoryToStaticUrl } from "../../../statics/apiUrl";
import { RootState } from "../../app/store";

let userUrl = "users";

export type TUserArray = TUser[];

export interface TUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// First, create the thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  console.log("object");
  const response = await fetch(addDirectoryToStaticUrl(userUrl));

  if (!response.ok) {
    return Promise.reject(response.status);
  }

  const resJson = await response.json();
  return resJson;
});

interface UsersState {
  entities: TUserArray;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

const initialState = {
  entities: [],
  status: "idle",
  error: "",
} as UsersState;

// Then, handle actions in your reducers:
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // getSingleAuthorById(state, action: PayloadAction<number>) {
    //   return state.entities.filter((user) => user.id == action.payload);
    // },
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    console.log("extraReduce");
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message as string;
    });
  },
});

export const getAllUsers = (state: RootState) => state.users.entities;
export const getUserStatus = (state: RootState) => state.users.status;
export const getUserError = (state: RootState) => state.users.error;

export default usersSlice.reducer;

// Action creators are generated for each case reducer function
