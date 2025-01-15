import axios from "axios";


// const API = axios.create({ baseURL: "https://todoback-rho.vercel.app" });
const API = axios.create({
  baseURL: "https://todoback-mern.vercel.app",
  withCredentials: true, // Add this if cookies/auth headers are required
});

export const fetchTasks = () => API.get("/");
export const addTask = (task) => API.post("/tasks", task);
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
