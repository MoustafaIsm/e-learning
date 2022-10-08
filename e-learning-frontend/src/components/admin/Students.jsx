import StudentCard from "./StudentCard"

function Students() {
    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Students</p>
            </div>
            <div className="students-cards-wrapper">
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
            </div>
        </div>
    )
}

export default Students