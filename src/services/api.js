import axios from 'axios';

// const API_URL = 'https://prism-topaz-muscari.glitch.me/api';
const API_URL = 'http://localhost:5000/api'; // Uncomment for local development
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const taskService = {
  getAllTasks: async () => {
    const res = await apiClient.get('/tasks');
    return res.data;
  },

  createTask: async (taskData) => {
    const res = await apiClient.post('/tasks', taskData);
    return res.data;
  },

  updateTask: async (id, taskData) => {
    const res = await apiClient.put(`/tasks/${id}`, taskData);
    return res.data;
  },

  deleteTask: async (id) => {
    const res = await apiClient.delete(`/tasks/${id}`);
    return res.data;
  }
};
