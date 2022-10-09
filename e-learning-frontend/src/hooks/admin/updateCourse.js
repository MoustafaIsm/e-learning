import axios from 'axios';

export const updateCourse = async (url, token, courseCode, instructorId) => {
    const response = await axios.put(`${url}/course/update_course/${courseCode}/${instructorId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.data;
}