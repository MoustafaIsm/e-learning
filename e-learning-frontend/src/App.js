import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Admin from './components/Admin';
import Instructor from './components/Instructor';
import Student from './components/Student';

function App() {
	const [token, setToken] = useState("");

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/Instructor' element={<Instructor />} />
				<Route path='/Student' element={<Student />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
