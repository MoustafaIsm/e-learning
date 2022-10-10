import axios from 'axios';

export const updateCourse = async (url, token, formData) => {
    const response = await axios.post(`${url}/course/update_course`, formData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}