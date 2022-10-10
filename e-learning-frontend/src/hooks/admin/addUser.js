import axios from "axios";

export const addUser = async (url, token, formData) => {
    const response = await axios.post(`${url}/user/add_user`, formData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}