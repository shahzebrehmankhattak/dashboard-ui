import { createSlice } from "@reduxjs/toolkit";

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState: {
    leaderboard: [],
    selected: null,
  },
  reducers: {
    setLeaderboards: (state, action) => {
      state.leaderboard = action.payload;
    },
    setSelectedLeaderboard: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setLeaderboards, setSelectedLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;