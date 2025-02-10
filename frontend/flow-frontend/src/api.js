import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this URL is correct and the backend server is running on this address
});

export default API;
