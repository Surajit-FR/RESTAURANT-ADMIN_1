import { Link } from 'react-router-dom';
import BoxDropDown from './headerItems/BoxDropDown';
import MessageDropdown from './headerItems/MessageDropdown';
import NotiDropdown from './headerItems/NotiDropdown';
import UserDropdown from './headerItems/UserDropdown';

const Header = (): JSX.Element => {

    return (
        <>
            {/* <!--start top header--> */}
            <header className="top-header">
                <nav className="navbar navbar-expand gap-3 align-items-center">
                    <div className="mobile-toggle-icon fs-3">
                        <i className="bi bi-list"></i>
                    </div>
                    <form className="searchbar">
                        <div className="position-absolute top-50 translate-middle-y search-icon ms-3"><i className="bi bi-search"></i></div>
                        <input className="form-control" type="text" placeholder="Type here to search" />
                        <div className="position-absolute top-50 translate-middle-y search-close-icon"><i className="bi bi-x-lg"></i></div>
                    </form>
                    <div className="top-navbar-right ms-auto">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item search-toggle-icon">
                                <Link className="nav-link" to="#">
                                    <div className="">
                                        <i className="bi bi-search"></i>
                                    </div>
                                </Link>
                            </li>

                            {/* Dropdown Large */}
                            <BoxDropDown />

                            {/* Message Drop down */}
                            <MessageDropdown />

                            {/* Notification Drop down */}
                            <NotiDropdown />

                            {/* User Drop down */}
                            <UserDropdown />
                        </ul>
                    </div>
                </nav>
            </header>
            {/* <!--end top header--> */}
        </>
    )
}

export default Header