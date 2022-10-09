import axios from 'axios';

export const deleteStudent = async (id, token) => {
    const response = await axios.delete(`http://127.0.0.1:8000/api/admin/user/delete_user/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}