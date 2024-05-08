import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4444',
} as AxiosRequestConfig);

export default instance