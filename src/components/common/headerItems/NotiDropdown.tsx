import PerfectScrollbar from "perfect-scrollbar";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NotiDropdown = (): JSX.Element => {
    const notiRef = useRef(null);

    useEffect(() => {
        const notiContainer = notiRef.current;
        if (notiContainer) {
            new PerfectScrollbar(notiContainer);
        }
    }, []);

    return (
        <>
            <li className="nav-item dropdown dropdown-large">
                <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                    <div className="notifications">
                        <span className="notify-badge">8</span>
                        <i className="bi bi-bell-fill"></i>
                    </div>
                </Link>
                <div className="dropdown-menu dropdown-menu-end p-0">
                    <div className="p-2 border-bottom m-2">
                        <h5 className="h5 mb-0">Notifications</h5>
                    </div>
                    <div className="header-notifications-list p-2" ref={notiRef}>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-primary text-primary"><i className="bi bi-basket2-fill"></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">New Orders <span className="msg-time float-end text-secondary">1
                                        m</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">You have recived
                                        new orders</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-purple text-purple"><i className="bi bi-people-fill"></i></div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">New Customers <span
                                        className="msg-time float-end text-secondary">7 m</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5 new user
                                        registered</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-success text-success"><i
                                    className="bi bi-file-earmark-bar-graph-fill"></i></div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">24 PDF File <span className="msg-time float-end text-secondary">2
                                        h</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">The pdf files
                                        generated</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-orange text-orange"><i
                                    className="bi bi-collection-play-fill"></i></div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">Time Response <span
                                        className="msg-time float-end text-secondary">3 h</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">5.1 min avarage
                                        time response</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-info text-info"><i className="bi bi-cursor-fill"></i></div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">New Product Approved <span
                                        className="msg-time float-end text-secondary">1 d</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Your new product
                                        has approved</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-pink text-pink"><i className="bi bi-gift-fill"></i></div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">New Comments <span
                                        className="msg-time float-end text-secondary">2 w</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">New customer
                                        comments recived</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-warning text-warning"><i className="bi bi-droplet-fill"></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">New 24 authors<span
                                        className="msg-time float-end text-secondary">1 m</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">24 new authors
                                        joined last week</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-primary text-primary"><i className="bi bi-mic-fill"></i></div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">Your item is shipped <span
                                        className="msg-time float-end text-secondary">7 m</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Successfully
                                        shipped your item</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-success text-success"><i className="bi bi-lightbulb-fill"></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">Defense Alerts <span
                                        className="msg-time float-end text-secondary">2 h</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">45% less alerts
                                        last 4 weeks</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-info text-info"><i className="bi bi-bookmark-heart-fill"></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">4 New Sign Up <span
                                        className="msg-time float-end text-secondary">2 w</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">New 4 user
                                        registartions</small>
                                </div>
                            </div>
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <div className="d-flex align-items-center">
                                <div className="notification-box bg-light-bronze text-bronze"><i className="bi bi-briefcase-fill"></i>
                                </div>
                                <div className="ms-3 flex-grow-1">
                                    <h6 className="mb-0 dropdown-msg-user">All Documents Uploaded <span
                                        className="msg-time float-end text-secondary">1 mo</span></h6>
                                    <small className="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">Sussessfully
                                        uploaded all files</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="p-2">
                        <div>
                            <hr className="dropdown-divider" />
                        </div>
                        <Link className="dropdown-item" to="#">
                            <div className="text-center">View All Notifications</div>
                        </Link>
                    </div>
                </div>
            </li>
        </>
    );
};

export default NotiDropdown;