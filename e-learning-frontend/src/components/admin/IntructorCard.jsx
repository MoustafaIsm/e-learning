
function IntructorCard() {
    return (
        <div className="instructor-card">
            <div className="instructor-profile-picture">

            </div>
            <div className="instructor-info">
                <p className="bold-text">Name</p>
                <p>email</p>
                <p>Major</p>
            </div>
            <div className="assign-to-wrapper">
                <p>Assign</p>
                {/* <CoursesDropDownList /> */}
                <button className="btn btn-blue btn-save"> Save </button>
            </div>
        </div>
    )
}

export default IntructorCard