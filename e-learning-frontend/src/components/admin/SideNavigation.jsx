import { Link } from "react-router-dom";

const SideNavigation = () => {
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
                    <input type={'submit'} value='logout' className="btn btn-outlined" />
                </form>
            </div>
        </div>
    )
}

export default SideNavigation