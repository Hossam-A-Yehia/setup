// services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.integrity-org.digital/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
