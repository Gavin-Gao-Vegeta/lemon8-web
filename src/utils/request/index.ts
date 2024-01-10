import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from "element-plus";

const service: AxiosInstance = axios.create({
  withCredentials: false,
  timeout: 10 * 60 * 1000, // 请求超时时间
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    console.log('response', response);
    console.log(res);
    if (response.status !== 200) {
      ElMessage(res.msg);
      return Promise.reject(res.msg || 'Error');
    } else {
      return Promise.resolve(res);
    }
  },
  (error: AxiosError) => {
    console.log('err' + error);
    ElMessage(error.message);
    return Promise.reject(error.message);
  },
);

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config);
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config);
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  },
};

export default service;
