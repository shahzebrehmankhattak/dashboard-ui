const BASE_URL = "";

// ================= USER =================
export const getUser = async () => {
  const res = await fetch("/db.json");
  const data = await res.json();
  return data.user;
};

// ================= PROJECTS =================
export const getProjects = async () => {
  const res = await fetch("/db.json");
  const data = await res.json();
  return data.projects;
};

// ================= LEADERBOARD =================
export const getLeaderboard = async () => {
  const res = await fetch("/db.json");
  const data = await res.json();
  return data.leaderboard;
};

// ================= NOTES (POST not possible in static JSON)
// Fake POST (for UI only)
export const addNote = async (noteData) => {
  console.log("Mock add note:", noteData);
  return { success: true, data: noteData };
};