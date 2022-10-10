import axios from 'axios';

export const deleteStudent = async (url, token, id) => {
    const response = await axios.delete(`${url}/user/delete_user/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}