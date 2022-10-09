import InstructorCard from './IntructorCard';
import AddInstructorModal from './AddInstructorModal';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchInstructors } from '../../hooks/admin/fetchInstructors';

function Instructors() {

    const url = 'http://127.0.0.1:8000/api/admin';
    const token = localStorage.getItem('token');
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const getInstructors = async () => {
            const instructorsData = await fetchInstructors(url, token);
            setInstructors(instructorsData.instructors);
        }
        getInstructors();
    }, []);

    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Instructors</p>
                <AddInstructorModal />
            </div>
            <div className="instructors-cards-wrapper">
                {
                    instructors.map((instructor, index) => {
                        return (
                            <InstructorCard
                                key={index}
                                instructor={instructor}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Instructors