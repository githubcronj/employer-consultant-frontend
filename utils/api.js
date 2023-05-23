import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your base URL
  // Other configuration options (headers, timeout, etc.) can be added here
});
export default api;
