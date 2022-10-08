import CourseCard from "./CourseCard";

function Courses() {
    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Courses</p>
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