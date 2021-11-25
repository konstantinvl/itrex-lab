import axios from 'axios';
import tokenStorage from '../auth/auth';

// const user = JSON.parse(localStorage.getItem('user') as string) as SessionData;

export const axiosInstance = axios.create({
    baseURL: 'https://reactlabapi.herokuapp.com/api/',
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${tokenStorage.getAccessToken()}`,
    },
});

export default axiosInstance;

// "firstName": "Marshall",
//   "lastName": "Mathers",
//   "userName": "marshall@itrexgroup.com",
//   "password": "MarshallPassword",
//   "specializations": [
//     "speech therapist"
//   ]
