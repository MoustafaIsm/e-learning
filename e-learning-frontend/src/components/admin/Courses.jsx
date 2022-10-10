import CourseCard from "./CourseCard";
import AddCouseModal from './AddCourseModal';
import { fetchCourses } from '../../hooks/admin/fetchCourses';
import { useState } from "react";
import { useEffect } from "react";
import { addCourse } from '../../hooks/admin/addCourse';

function Courses({ url, token }) {

    const [courses, setCourses] = useState([]);

    const addNewCourse = async (url, token, course) => {
        const data = await addCourse(url, token, course);
        setCourses([...courses, data.course]);
    }

    useEffect(() => {
        const getCourses = async () => {
            const coursesData = await fetchCourses(url, token);
            setCourses(coursesData.courses);
        }
        getCourses();
    }, [token, url]);

    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Courses</p>
                <AddCouseModal
                    url={url}
                    token={token}
                    onAdd={addNewCourse}
                />
            </div>
            <div className="courses-cards-wrapper">
                {
                    courses.map((course, index) => {
                        return (
                            <CourseCard
                                key={index}
                                url={url}
                                token={token}
                                course={course}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Courses