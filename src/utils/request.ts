import axios, {AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios';
import {hideLoading, showLoading} from "./loading";

const service:AxiosInstance = axios.create({
    timeout: 5000,
    headers:{'Content-Type':'application/json'},
    // baseURL:'/api'
    baseURL:''
});

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        showLoading('xxxx')
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            hideLoading();
            return response;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
