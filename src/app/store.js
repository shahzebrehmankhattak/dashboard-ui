import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projects/projectSlice";
import leaderboardReducer from "../features/leaderboard/leaderboardSlice";
import  userReducer  from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    leaderboard: leaderboardReducer,
    users:userReducer
  },
});