import axios from "axios";

// 从环境变量中获取 baseURL 和 timeout
const baseURL = import.meta.env.VITE_APP_BASE_URL;
const timeout = import.meta.env.VITE_APP_TIMEOUT;

const http = axios.create({
  baseURL: baseURL,
  timeout: parseInt(timeout, 10),
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 只返回 response 的 data 部分
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
