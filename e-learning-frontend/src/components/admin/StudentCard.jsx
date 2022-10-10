
function StudentCard({ student, onDelete }) {

    const deleteStudent = () => {
        onDelete(student._id);
    }

    return (
        <div className="student-card">
            <div className="student-profile-picture">

            </div>
            <div className="student-info">
                <p className="bold-text">{student.name}</p>
                <p>{student.email}</p>
                <p>{student.date_of_birth}</p>
            </div>
            <div className="student-delete-btn">
                <img src="/delete.svg" alt="delete" onClick={deleteStudent} />
            </div>
        </div>
    )
}

export default StudentCard
