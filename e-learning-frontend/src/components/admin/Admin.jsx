import { Route, Routes } from 'react-router-dom';
import './admin.css';
import SideNavigation from './SideNavigation';
import Students from './Students';
import Instructors from './Instructors';
import Courses from './Courses';

const Admin = () => {
    return (
        <div className='admin-wrapper'>
            <SideNavigation />
            <Routes>
                <Route path='/students' element={<Students />} />
                <Route path='/instructors' element={<Instructors />} />
                <Route path='/courses' element={<Courses />} />
            </Routes>
        </div>
    )
}

export default Admin