import { Link } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
    return (
        <>
            {/* <!--start sidebar --> */}
            <aside className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img src="/assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                    </div>
                    <div>
                        <h4 className="logo-text">Snacked</h4>
                    </div>
                    <div className="toggle-icon ms-auto"> <i className="bi bi-list"></i>
                    </div>
                </div>
                {/* <!--navigation--> */}
                <ul className="metismenu" id="menu">
                    <li>
                        <Link to="#" className="has-arrow" >
                            <div className="parent-icon"><i className="bi bi-house-fill"></i></div>
                            <div className="menu-title">Dashboard</div>
                        </Link>
                        <ul>
                            <li><Link to="index.html"><i className="bi bi-circle"></i>Default</Link></li>
                            <li><Link to="index2.html"><i className="bi bi-circle"></i>Alternate</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" className="has-arrow">
                            <div className="parent-icon"><i className="bi bi-grid-fill"></i>
                            </div>
                            <div className="menu-title">Application</div>
                        </Link>
                        <ul>
                            <li> <Link to="app-emailbox.html"><i className="bi bi-circle"></i>Email</Link>
                            </li>
                            <li> <Link to="app-chat-box.html"><i className="bi bi-circle"></i>Chat Box</Link>
                            </li>
                            <li> <Link to="app-file-manager.html"><i className="bi bi-circle"></i>File Manager</Link>
                            </li>
                            <li> <Link to="app-to-do.html"><i className="bi bi-circle"></i>Todo List</Link>
                            </li>
                            <li> <Link to="app-invoice.html"><i className="bi bi-circle"></i>Invoice</Link>
                            </li>
                            <li> <Link to="app-fullcalender.html"><i className="bi bi-circle"></i>Calendar</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">UI Elements</li>
                    <li>
                        <Link to="widgets.html">
                            <div className="parent-icon"><i className="bi bi-droplet-fill"></i>
                            </div>
                            <div className="menu-title">Widgets</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="has-arrow">
                            <div className="parent-icon"><i className="bi bi-basket2-fill"></i>
                            </div>
                            <div className="menu-title">eCommerce</div>
                        </Link>
                        <ul>
                            <li> <Link to="ecommerce-products-list.html"><i className="bi bi-circle"></i>Products List</Link>
                            </li>
                            <li> <Link to="ecommerce-products-grid.html"><i className="bi bi-circle"></i>Products Grid</Link>
                            </li>
                            <li> <Link to="ecommerce-products-categories.html"><i className="bi bi-circle"></i>Categories</Link>
                            </li>
                            <li> <Link to="ecommerce-orders.html"><i className="bi bi-circle"></i>Orders</Link>
                            </li>
                            <li> <Link to="ecommerce-orders-detail.html"><i className="bi bi-circle"></i>Order details</Link>
                            </li>
                            <li> <Link to="ecommerce-add-new-product.html"><i className="bi bi-circle"></i>Add New Product</Link>
                            </li>
                            <li> <Link to="ecommerce-add-new-product-2.html"><i className="bi bi-circle"></i>Add New Product 2</Link>
                            </li>
                            <li> <Link to="ecommerce-transactions.html"><i className="bi bi-circle"></i>Transactions</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-award-fill"></i>
                            </div>
                            <div className="menu-title">Components</div>
                        </Link>
                        <ul>
                            <li> <Link to="component-alerts.html"><i className="bi bi-circle"></i>Alerts</Link>
                            </li>
                            <li> <Link to="component-accordions.html"><i className="bi bi-circle"></i>Accordions</Link>
                            </li>
                            <li> <Link to="component-badges.html"><i className="bi bi-circle"></i>Badges</Link>
                            </li>
                            <li> <Link to="component-buttons.html"><i className="bi bi-circle"></i>Buttons</Link>
                            </li>
                            <li> <Link to="component-cards.html"><i className="bi bi-circle"></i>Cards</Link>
                            </li>
                            <li> <Link to="component-carousels.html"><i className="bi bi-circle"></i>Carousels</Link>
                            </li>
                            <li> <Link to="component-list-groups.html"><i className="bi bi-circle"></i>List Groups</Link>
                            </li>
                            <li> <Link to="component-media-object.html"><i className="bi bi-circle"></i>Media Objects</Link>
                            </li>
                            <li> <Link to="component-modals.html"><i className="bi bi-circle"></i>Modals</Link>
                            </li>
                            <li> <Link to="component-navs-tabs.html"><i className="bi bi-circle"></i>Navs & Tabs</Link>
                            </li>
                            <li> <Link to="component-navbar.html"><i className="bi bi-circle"></i>Navbar</Link>
                            </li>
                            <li> <Link to="component-paginations.html"><i className="bi bi-circle"></i>Pagination</Link>
                            </li>
                            <li> <Link to="component-popovers-tooltips.html"><i className="bi bi-circle"></i>Popovers & Tooltips</Link>
                            </li>
                            <li> <Link to="component-progress-bars.html"><i className="bi bi-circle"></i>Progress</Link>
                            </li>
                            <li> <Link to="component-spinners.html"><i className="bi bi-circle"></i>Spinners</Link>
                            </li>
                            <li> <Link to="component-notifications.html"><i className="bi bi-circle"></i>Notifications</Link>
                            </li>
                            <li> <Link to="component-avtars-chips.html"><i className="bi bi-circle"></i>Avatrs & Chips</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-cloud-arrow-down-fill"></i>
                            </div>
                            <div className="menu-title">Icons</div>
                        </Link>
                        <ul>
                            <li> <Link to="icons-line-icons.html"><i className="bi bi-circle"></i>Line Icons</Link>
                            </li>
                            <li> <Link to="icons-boxicons.html"><i className="bi bi-circle"></i>Boxicons</Link>
                            </li>
                            <li> <Link to="icons-feather-icons.html"><i className="bi bi-circle"></i>Feather Icons</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">Forms & Tables</li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-file-earmark-break-fill"></i>
                            </div>
                            <div className="menu-title">Forms</div>
                        </Link>
                        <ul>
                            <li> <Link to="form-elements.html"><i className="bi bi-circle"></i>Form Elements</Link>
                            </li>
                            <li> <Link to="form-input-group.html"><i className="bi bi-circle"></i>Input Groups</Link>
                            </li>
                            <li> <Link to="form-layouts.html"><i className="bi bi-circle"></i>Forms Layouts</Link>
                            </li>
                            <li> <Link to="form-validations.html"><i className="bi bi-circle"></i>Form Validation</Link>
                            </li>
                            <li> <Link to="form-wizard.html"><i className="bi bi-circle"></i>Form Wizard</Link>
                            </li>
                            <li> <Link to="form-date-time-pickes.html"><i className="bi bi-circle"></i>Date Pickers</Link>
                            </li>
                            <li> <Link to="form-select2.html"><i className="bi bi-circle"></i>Select2</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-file-earmark-spreadsheet-fill"></i>
                            </div>
                            <div className="menu-title">Tables</div>
                        </Link>
                        <ul>
                            <li> <Link to="table-basic-table.html"><i className="bi bi-circle"></i>Basic Table</Link>
                            </li>
                            <li> <Link to="table-advance-tables.html"><i className="bi bi-circle"></i>Advance Tables</Link>
                            </li>
                            <li> <Link to="table-datatable.html"><i className="bi bi-circle"></i>Data Table</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">Pages</li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-lock-fill"></i>
                            </div>
                            <div className="menu-title">Authentication</div>
                        </Link>
                        <ul>
                            <li> <Link to="authentication-signin.html" target="_blank"><i className="bi bi-circle"></i>Sign In</Link>
                            </li>
                            <li> <Link to="authentication-signup.html" target="_blank"><i className="bi bi-circle"></i>Sign Up</Link>
                            </li>


                            <li> <Link to="authentication-forgot-password.html" target="_blank"><i className="bi bi-circle"></i>Forgot
                                Password</Link>
                            </li>
                            <li> <Link to="authentication-reset-password.html" target="_blank"><i className="bi bi-circle"></i>Reset
                                Password</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="pages-user-profile.html">
                            <div className="parent-icon"><i className="bi bi-person-lines-fill"></i>
                            </div>
                            <div className="menu-title">User Profile</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="pages-timeline.html">
                            <div className="parent-icon"><i className="bi bi-collection-play-fill"></i>
                            </div>
                            <div className="menu-title">Timeline</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-exclamation-triangle-fill"></i>
                            </div>
                            <div className="menu-title">Errors</div>
                        </Link>
                        <ul>
                            <li> <Link to="pages-errors-404-error.html" target="_blank"><i className="bi bi-circle"></i>404 Error</Link>
                            </li>
                            <li> <Link to="pages-errors-500-error.html" target="_blank"><i className="bi bi-circle"></i>500 Error</Link>
                            </li>
                            <li> <Link to="pages-errors-coming-soon.html" target="_blank"><i className="bi bi-circle"></i>Coming Soon</Link>
                            </li>
                            <li> <Link to="pages-blank-page.html" target="_blank"><i className="bi bi-circle"></i>Blank Page</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="pages-faq.html">
                            <div className="parent-icon"><i className="bi bi-question-lg"></i>
                            </div>
                            <div className="menu-title">FAQ</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="pages-pricing-tables.html">
                            <div className="parent-icon"><i className="bi bi-tags-fill"></i>
                            </div>
                            <div className="menu-title">Pricing Tables</div>
                        </Link>
                    </li>
                    <li className="menu-label">Charts & Maps</li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-bar-chart-line-fill"></i>
                            </div>
                            <div className="menu-title">Charts</div>
                        </Link>
                        <ul>
                            <li> <Link to="charts-apex-chart.html"><i className="bi bi-circle"></i>Apex</Link>
                            </li>
                            <li> <Link to="charts-chartjs.html"><i className="bi bi-circle"></i>Chartjs</Link>
                            </li>
                            <li> <Link to="charts-highcharts.html"><i className="bi bi-circle"></i>Highcharts</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-pin-map-fill"></i>
                            </div>
                            <div className="menu-title">Maps</div>
                        </Link>
                        <ul>
                            <li> <Link to="map-google-maps.html"><i className="bi bi-circle"></i>Google Maps</Link>
                            </li>
                            <li> <Link to="map-vector-maps.html"><i className="bi bi-circle"></i>Vector Maps</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-label">Others</li>
                    <li>
                        <Link className="has-arrow" to="#">
                            <div className="parent-icon"><i className="bi bi-music-note-list"></i>
                            </div>
                            <div className="menu-title">Menu Levels</div>
                        </Link>
                        <ul>
                            <li> <Link className="has-arrow" to="#"><i className="bi bi-circle"></i>Level One</Link>
                                <ul>
                                    <li> <Link className="has-arrow" to="#"><i className="bi bi-circle"></i>Level Two</Link>
                                        <ul>
                                            <li> <Link to="#"><i className="bi bi-circle"></i>Level Three</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="parent-icon"><i className="bi bi-file-code-fill"></i>
                            </div>
                            <div className="menu-title">Documentation</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="parent-icon"><i className="bi bi-telephone-fill"></i>
                            </div>
                            <div className="menu-title">Support</div>
                        </Link>
                    </li>
                </ul>
                {/* <!--end navigation--> */}
            </aside>
            {/* <!--end sidebar --> */}
        </>
    )
}

export default Sidebar;