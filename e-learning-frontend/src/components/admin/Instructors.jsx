import InstructorCard from './IntructorCard';
import AddInstructorModal from './AddInstructorModal';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchInstructors } from '../../hooks/admin/fetchInstructors';
import { fetchCourses } from '../../hooks/admin/fetchCourses';

function Instructors({ url, token }) {

    const [instructors, setInstructors] = useState([]);
    const [coursesNames, setCoursesNames] = useState([]);

    useEffect(() => {
        const getInstructors = async () => {
            const instructorsData = await fetchInstructors(url, token);
            setInstructors(instructorsData.instructors);
        }
        const getCoursesNames = async () => {
            const coursesData = await fetchCourses(url, token);
            const temp = [];
            for (const course of coursesData.courses) {
                if (course.assigned_to === -1)
                    temp.push(course.code);
            }
            setCoursesNames(temp);
        }
        getCoursesNames();
        getInstructors();
    }, [token, url]);

    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Instructors</p>
                <AddInstructorModal />
            </div>
            <div className="instructors-cards-wrapper">
                {
                    instructors.map((instructor, index) => {
                        return (
                            <InstructorCard
                                key={index}
                                url={url}
                                token={token}
                                instructor={instructor}
                                coursesNames={coursesNames}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Instructors