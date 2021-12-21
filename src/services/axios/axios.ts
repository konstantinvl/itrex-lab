import axios from 'axios';
import tokenStorage from '../auth/auth';

export const axiosInstance = axios.create({
    baseURL: 'https://reactlabapi.herokuapp.com/api/',
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${tokenStorage.getAccessToken()}`,
    },
});

export default axiosInstance;
