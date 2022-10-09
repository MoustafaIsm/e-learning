import axios from 'axios';

export const fetchStudents = async (url, token) => {
    const response = await axios(`${url}/user/get_users/students`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}