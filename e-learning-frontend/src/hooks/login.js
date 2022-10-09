import axios from 'axios';

export const deleteStudent = async (url, formData) => {
    const response = await axios.post(`${url}/auth/login`, formData);
    const data = await response.json();
    return data;
}