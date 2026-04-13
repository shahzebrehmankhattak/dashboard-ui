// services/api.js
import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: "http://localhost:3001", // json-server
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= USER =================
export const getUser = async () => {
  const res = await API.get("/user");
  return res.data;
};

// ================= PROJECTS =================
export const getProjects = async () => {
  const res = await API.get("/projects");
  return res.data;
};

// ================= LEADERBOARD =================
export const getLeaderboard = async () => {
  const res = await API.get("/leaderboard");
  return res.data;
};

// ================= NOTES (POST) =================
export const addNote = async (noteData) => {
  const res = await API.post("/notes", noteData);
  return res.data;
};

export default API;