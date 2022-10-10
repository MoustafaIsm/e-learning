import axios from "axios";

export const addCourse = async (url, token, formData) => {
    const response = await axios.post(`${url}/course/add_course`, formData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}