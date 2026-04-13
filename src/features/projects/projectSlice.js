import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    selected: null,
  },
  reducers: {
    setProjects: (state, action) => {
      state.list = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setProjects, setSelectedProject } = projectSlice.actions;
export default projectSlice.reducer;