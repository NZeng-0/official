import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.DEV ? import.meta.env.VITE_DEV_PATH : import.meta.env.VITE_PRO_PATH,
    timeout: 10000,
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

export default axiosInstance