import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import user from "../user";

export const getData = createAsyncThunk("fetchUsers", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return user;
});

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    users: user,
    shortListedUser: [],
  },

  reducers: {
    addShortListedUser: (state, action) => {
      state.shortListedUser.push(action.payload);
    },
    createUser: (state, action) => {
      state.users.push(action.payload);
      console.log("state", state.users);
    },
    editUser: (state, actions) => {
      const {
        Id,

        FirstName,
        LastName,
        PrimaryEmail,

        PrimaryPhoneNumber,
        ExperienceInMonthsWithCompanyName,

        ExpectedSalary,
      } = actions.payload;
      const updateUser = state.users.find((user) => user.Id == Id);
      if (updateUser) {
        updateUser.Id = Id;
        // updateUser.photo = photo;
        updateUser.FirstName = FirstName;
        updateUser.LastName = LastName;
        updateUser.PrimaryEmail = PrimaryEmail;

        // updateUser.select = select;
        // updateUser.city = city;
        updateUser.ExpectedSalary = ExpectedSalary;
        updateUser.PrimaryPhoneNumber = PrimaryPhoneNumber;
        updateUser.ExperienceInMonthsWithCompanyName =
          ExperienceInMonthsWithCompanyName;
      }
    },
    deleteUserData: (state, actions) => {
      const { ID } = actions.payload;
      console.log("id1", ID);
      state.users = state.users.filter((user) => user.Id !== ID);
    },
  },
});
export default UserSlice.reducer;

export const { addShortListedUser, createUser, editUser, deleteUserData } =
  UserSlice.actions;
