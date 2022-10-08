import CoursesDropDownList from "./CoursesDropDownList"

function IntructorCard() {
    return (
        <div className="instructor-card">
            <div className="instructor-profile-picture">

            </div>
            <div className="instructor-info">
                <p className="bold-text">Name</p>
                <p>email</p>
                <p>Date of birth</p>
            </div>
            <div className="assign-to-wrapper">
                <p>Assign</p>
                <CoursesDropDownList />
            </div>
        </div>
    )
}

export default IntructorCard