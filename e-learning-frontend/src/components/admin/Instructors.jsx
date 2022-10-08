import InstructorCard from './IntructorCard';
import AddInstructorModal from './AddInstructorModal';

function Instructors() {
    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Instructors</p>
                <AddInstructorModal />
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