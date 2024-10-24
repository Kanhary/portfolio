import axios from 'axios';
import { getToken } from './token/Token';

const request = axios.create({
    baseURL: 'http://192.168.168.14:8888',
    withCredentials: false,
    timeout: 30000,
});

// Set default headers
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

// Request interceptor for adding token
request.interceptors.request.use(
    (config) => {
        const token = getToken('yourTokenKey'); // Replace with your token key
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
request.interceptors.response.use(
    (response) => {
        console.log(response.data);
        const { msg, code } = response.data;
        console.log("code=====>", code, 'msg====>', msg);
        if (code == null || code === 200) {
            return response;
        }
        return Promise.reject(msg);
    },
    (error) => {
        console.error('Error Response:', error.response);
        return Promise.reject(error);
    }
);

export default request;
