import CoursesDropDownList from "./CoursesDropDownList"

function IntructorCard({ instructor }) {
    return (
        <div className="instructor-card">
            <div className="instructor-profile-picture">

            </div>
            <div className="instructor-info">
                <p className="bold-text">{instructor.name}</p>
                <p>{instructor.email}</p>
                <p>{instructor.date_of_birth}</p>
            </div>
            <div className="assign-to-wrapper">
                <p>Assign</p>
                <CoursesDropDownList />
            </div>
        </div>
    )
}

export default IntructorCard