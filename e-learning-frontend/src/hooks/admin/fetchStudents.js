import axios from 'axios';

export const fetchStudents = async (url) => {
    const response = await axios(`${url}/user/get_users/students`);
    const data = await response.json();
    return data;
}