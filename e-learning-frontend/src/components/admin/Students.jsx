import StudentCard from "./StudentCard"
import AddStudentModal from "./AddStudentModal"
import { useState } from "react"
import { useEffect } from "react";
import { fetchStudents } from '../../hooks/admin/fetchStudents';
import { deleteStudent } from '../../hooks/admin/deleteStudent';
import { addUser } from '../../hooks/admin/addUser';

function Students({ url, token }) {

    const [students, setStudents] = useState([]);

    const addStudent = async (url, token, student) => {
        const data = await addUser(url, token, student);
        setStudents([...students, data.user]);
    }

    useEffect(() => {
        const getStudents = async () => {
            const studentsData = await fetchStudents(url, token);
            setStudents(studentsData.students);
        }
        getStudents();
    }, [token, url]);

    return (
        <div className="page">
            <div className="page-title">
                <p className="large-text bold-text">Students</p>
                <AddStudentModal
                    url={url}
                    token={token}
                    onAdd={addStudent}
                />
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