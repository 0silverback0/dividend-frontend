// dividendService.js

import axios from 'axios';

const BASE_URL = 'https://your-backend-api-url.com'; // Replace with your Django backend URL

export const fetchDividendData = (symbol) => {
  return axios.get(`${BASE_URL}/api/get-dividend-data/?symbol=${symbol}`);
};
