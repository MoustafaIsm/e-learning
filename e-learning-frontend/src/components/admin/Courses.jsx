import CourseCard from "./CourseCard";
import AddCouseModal from './AddCourseModal';

function Courses() {
    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Courses</p>
                <AddCouseModal />
            </div>
            <div className="courses-cards-wrapper">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default Courses