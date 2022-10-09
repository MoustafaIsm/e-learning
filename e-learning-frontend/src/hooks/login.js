import axios from 'axios';

export const loginUser = async (url, formData) => {
    const response = await axios.post(`${url}/auth/login`, formData);
    const data = await response.data;
    return data;
}