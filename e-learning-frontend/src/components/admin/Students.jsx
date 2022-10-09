import StudentCard from "./StudentCard"
import AddStudentModal from "./AddStudentModal"
import { useState } from "react"
import { useEffect } from "react";
import { fetchStudents } from '../../hooks/admin/fetchStudents';
import { deleteStudent } from '../../hooks/admin/deleteStudent';

function Students({ url, token }) {

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
                                url={url}
                                token={token}
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