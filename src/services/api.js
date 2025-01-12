import axios from "axios";

const API = axios.create({ baseURL: "https://todoback-rho.vercel.app" });

export const fetchTasks = () => API.get("/tasks");
export const addTask = (task) => API.post("/tasks", task);
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
