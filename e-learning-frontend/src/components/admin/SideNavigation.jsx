import { Link } from "react-router-dom";

const SideNavigation = () => {
    return (
        <div className='side-nav-wrapper'>
            <div className="logo-wrapper">
                <img src="/logo1.png" alt="logo" />
            </div>
            <ul className="side-nav-btns">
                <li><Link to={'students'}> Students </Link></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default SideNavigation