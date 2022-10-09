import { Route, Routes } from 'react-router-dom';
import './admin.css';
import SideNavigation from './SideNavigation';
import Students from './Students';
import Instructors from './Instructors';
import Courses from './Courses';

const Admin = () => {

    const url = 'http://127.0.0.1:8000/api/admin';
    const token = localStorage.getItem('token');

    return (
        <div className='admin-wrapper'>
            <SideNavigation />
            <Routes>
                <Route path='/' element={<Students url={url} token={token} />} />
                <Route path='/students' element={<Students url={url} token={token} />} />
                <Route path='/instructors' element={<Instructors url={url} token={token} />} />
                <Route path='/courses' element={<Courses url={url} token={token} />} />
            </Routes>
        </div>
    )
}

export default Admin