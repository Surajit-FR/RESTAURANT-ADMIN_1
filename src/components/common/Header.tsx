import { Link } from 'react-router-dom';
import UserDropdown from './headerItems/UserDropdown';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/Store';
import { getCurrentUserRequest } from '../../store/reducers/UserReducers';
// import BoxDropDown from './headerItems/BoxDropDown';
// import MessageDropdown from './headerItems/MessageDropdown';
// import NotiDropdown from './headerItems/NotiDropdown';
// import SearchBar from './headerItems/SearchBar';

const Header = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUserRequest('userSlice/getCurrentUserRequest'))
    }, [dispatch]);

    return (
        <>
            {/* <!--start top header--> */}
            <header className="top-header">
                <nav className="navbar navbar-expand gap-3 align-items-center">
                    <div className="mobile-toggle-icon fs-3">
                        <i className="bi bi-list"></i>
                    </div>

                    {/* Searchbar */}
                    {/* <SearchBar /> */}

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
                            {/* <BoxDropDown /> */}

                            {/* Message Drop down */}
                            {/* <MessageDropdown /> */}

                            {/* Notification Drop down */}
                            {/* <NotiDropdown /> */}

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