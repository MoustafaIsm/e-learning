import axios from 'axios';

export const deleteStudent = async (url, id, token) => {
    const response = await axios.delete(`${url}/user/delete_user/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}