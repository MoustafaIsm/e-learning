import { Link, useNavigate } from "react-router-dom";

const SideNavigation = () => {

    // Variables
    const navigate = useNavigate();

    // Functions
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className='side-nav-wrapper'>
            <div className="logo-wrapper">
                <img src="/logo1.png" alt="logo" width={'100%'} />
            </div>
            <ul className="side-nav-btns">
                <li className="side-nav-btn active-side-nav-btn"><Link to={'students'}> Students </Link></li>
                <li className="side-nav-btn"><Link to={'instructors'}> Instructors </Link></li>
                <li className="side-nav-btn"><Link to={'courses'}> Courses </Link></li>
            </ul>
            <div className="logout-wrapper">
                <form>
                    <input
                        type={'submit'}
                        value='logout'
                        className="btn btn-outlined"
                        onClick={logout} />
                </form>
            </div>
        </div>
    )
}

export default SideNavigation