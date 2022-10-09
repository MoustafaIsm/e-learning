import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { loginUser } from '../../hooks/login';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    // useStates
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Functions
    const login = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const data = await loginUser('http://127.0.0.1:8000/api', formData);
        if (data.status === 'success') {
            saveUserData(data.user);
            onLogin(localStorage.getItem('role_id'));
            navigate('/');
        } else {
            setError(data.message);
        }
        // TODO: fix onLogin function
    }

    const saveUserData = (user) => {
        localStorage.setItem('id', user._id);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
        localStorage.setItem('token', user.token);
        localStorage.setItem('date_of_birth', user.date_of_birth);
        localStorage.setItem('profile_picture_url', user.profile_picture_url);
        localStorage.setItem('role_id', user.role_id);

    }

    return (
        <div className='login-wrapper'>
            <div className='login-logo-wrapper'>
                <img src='/logo.jpg' alt='logo' />
            </div>
            <div className='login-form-wrapper'>
                <form onSubmit={login}>
                    <div className='form-input-wrapper'>
                        <label> Email </label>
                        <input
                            type="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Password </label>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p>{error}</p>
                    <input type={'submit'} value='login' className='btn btn-blue' />
                </form>
            </div>
        </div>
    )
}

export default Login