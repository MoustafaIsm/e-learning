import CourseCard from "./CourseCard";
import AddCouseModal from './AddCourseModal';
import { fetchCourses } from '../../hooks/admin/fetchCourses';
import { useState } from "react";
import { useEffect } from "react";

function Courses({ url, token }) {

    const [courses, setCourses] = useState([]);

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
                <AddCouseModal />
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