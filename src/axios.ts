import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5173',
} as AxiosRequestConfig);

export default instance