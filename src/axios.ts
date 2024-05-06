import axios, {AxiosRequestConfig} from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5173',
} as AxiosRequestConfig);

axios.get('/reviews');

export default instance