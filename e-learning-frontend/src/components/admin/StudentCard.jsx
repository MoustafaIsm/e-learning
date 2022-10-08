
function StudentCard(props) {
    return (
        <div className="student-card">
            <div className="student-profile-picture">

            </div>
            <div className="student-info">
                <p className="bold-text">Name</p>
                <p>email</p>
                <p>date of birth</p>
            </div>
            <div className="student-delete-btn">
                <img src="/delete.svg" alt="delete" />
            </div>
        </div>
    )
}

export default StudentCard
