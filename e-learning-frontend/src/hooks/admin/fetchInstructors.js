import axios from 'axios';

export const fetchInstructors = async (url, token) => {
    const response = await axios(`${url}/user/get_users/instrctors`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}