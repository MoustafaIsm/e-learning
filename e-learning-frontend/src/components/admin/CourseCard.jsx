import { useEffect } from "react";
import { useState } from "react";
import { fetchUser } from '../../hooks/admin/fetchUser';

function CourseCard({ url, token, course }) {

    const [assigned, setAssigned] = useState('');

    useEffect(() => {
        const getAssigned = async () => {
            if (course.assigned_to === -1)
                setAssigned('Not assigned');
            else {
                const userData = await fetchUser(url, token, course.assigned_to);
                setAssigned(`Assigned to: ${userData.user[0].name}`);
            }
        }
        getAssigned();
    }, [course._id, course.assigned_to, token, url]);

    return (
        <div className="course-card">
            <div className="course-info">
                <p className="bold-text">{`Code: ${course.code}`}</p>
                <p>{`Name: ${course.name}`}</p>
                <p>{`Credits: ${course.credits}`}</p>
                <p>{assigned}</p>
            </div>
        </div>
    )
}

export default CourseCard