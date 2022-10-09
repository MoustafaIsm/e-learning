import axios from 'axios';

export const fetchUser = async (url, token, id) => {
    const response = await axios(`${url}/user/get_user/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}