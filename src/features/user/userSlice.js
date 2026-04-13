import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "projects",
  initialState: {
    users: [],
    selected: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setUsers, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;