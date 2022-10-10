import axios from 'axios';

export const fetchCourses = async (url, token) => {
    const response = await axios(`${url}/course/get_courses`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}