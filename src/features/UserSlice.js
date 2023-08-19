import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import user from "../user";

export const getData = createAsyncThunk("fetchUsers", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return user;
});

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload.map((user, index) => ({
        ...user,
        serialNumber: index + 1,
      }));
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default UserSlice.reducer;
