import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    // useStates
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        localStorage.setItem('role_id', '1');
        onLogin(localStorage.getItem('role_id'));
        navigate('/');
        // TODO: Add a function to get the user info
        // TODO: Add a function that saves user data into local storage
        // TODO: reset the user inputs
    }

  return (
        <div className='login-wrapper'>
            <div className='login-logo-wrapper'>
                <img src='/logo.jpg' alt='logo'/>
            </div>
            <div className='login-form-wrapper'>
                <form onSubmit={login}>
                    <div className='form-input-wrapper'>
                        <label> Email </label>
                        <input 
                            type="email" 
                            placeholder='email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Password </label>
                        <input 
                            type="password" 
                            placeholder='Password'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <input type={'submit'} value='login' className='btn btn-blue' />
                </form>
            </div>
        </div>
  )
}

export default Login