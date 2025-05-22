import axios from "axios";

const API_URL = 'https://backend-app-production-6dfd.up.railway.app';

export const api = axios.create({
    baseURL: API_URL
});
