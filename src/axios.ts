import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4444',
} as AxiosRequestConfig);

instance.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance