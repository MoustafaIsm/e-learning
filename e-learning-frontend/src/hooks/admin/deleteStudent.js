import axios from 'axios';

export const deleteStudent = async (url, id) => {
    const response = await axios.delete(`${url}/user/delete_user/${id}`);
    const data = await response.json();
    return data;
}