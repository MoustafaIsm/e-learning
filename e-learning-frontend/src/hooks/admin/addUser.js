import axios from "axios";

export const deleteStudent = async (url, token, formData) => {
    const response = await axios.post(`${url}/user/add_user`, {
        headers: { 'Authorization': `Bearer ${token}` }
    }, formData);
    return await response.data;
}