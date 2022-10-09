import StudentCard from "./StudentCard"
import AddStudentModal from "./AddStudentModal"
import { useState } from "react"
import { useEffect } from "react";
import { fetchStudents } from '../../hooks/admin/fetchStudents';
import { deleteStudent } from '../../hooks/admin/deleteStudent';

function Students() {

    const url = 'http://127.0.0.1:8000/api/admin';
    const token = localStorage.getItem('token');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const studentsData = await fetchStudents(url, token);
            setStudents(studentsData.students);
        }
        getStudents();
    });

    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Students</p>
                <AddStudentModal />
            </div>
            <div className="students-cards-wrapper">
                {
                    students.map((student, index) => {
                        return (
                            <StudentCard
                                key={index}
                                student={student}
                                onDelete={deleteStudent}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Students