import InstructorCard from './IntructorCard'

function Instructors() {
    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Instructors</p>
                <button className="bold-text btn btn-blue"> Add Instructor </button>
            </div>
            <div className="instructors-cards-wrapper">
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
            </div>
        </div>
    )
}

export default Instructors