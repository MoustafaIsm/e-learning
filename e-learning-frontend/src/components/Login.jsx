import {useNavigate} from 'react-router-dom';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        localStorage.setItem('role_id', '2');
        onLogin(localStorage.getItem('role_id'));
        navigate('/');
    }

  return (
    <form onSubmit={login}>
        <input type={'submit'} value='login'/>
    </form>
  )
}

export default Login