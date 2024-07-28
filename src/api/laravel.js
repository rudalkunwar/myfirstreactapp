import axios from './axios';

const instance = axios.create ({
  baseURL: 'http://localhost:8000/api', // Default base URL
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here
  },
  timeout: 10000, // Set a default timeout of 10 seconds
});

export default instance;
