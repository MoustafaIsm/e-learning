import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Admin from './components/Admin';
import Instructor from './components/Instructor';
import Student from './components/Student';

function App() {

	const [path, setPath] = useState('./login');

	const getPath = (role) => {
		switch (role) {
			case '1':
				setPath('/admin');
				break;
			case '2':
				setPath('/instructor');
				break;
			case '3':
				setPath('/student');
				break;
			default:
				setPath('/login');
				break;
		}
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to={path} />} />
				<Route path='/login' element={<Login onLogin={getPath} />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/instructor' element={<Instructor />} />
				<Route path='/student' element={<Student />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
