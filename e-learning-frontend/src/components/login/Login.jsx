import {useNavigate} from 'react-router-dom';
import './login.css';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        localStorage.setItem('role_id', '1');
        onLogin(localStorage.getItem('role_id'));
        navigate('/');
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
                        <input type="email" placeholder='email' id='email'/>
                    </div>
                    <div className='form-input-wrapper'>
                        <label> Password </label>
                        <input type="password" placeholder='Password' id='password'/>
                    </div>
                    <input type={'submit'} value='login' className='btn btn-blue' />
                </form>
            </div>
        </div>
  )
}

export default Login