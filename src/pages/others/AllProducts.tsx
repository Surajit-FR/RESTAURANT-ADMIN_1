import { Link } from "react-router-dom";

const AllProducts = (): JSX.Element => {
    return (
        <>
            {/* <!--start content--> */}
            <main className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Product</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">All Products</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-0">Order Table</h5>
                            <form className="ms-auto position-relative">
                                <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-search"></i>
                                </div>
                                <input className="form-control ps-5" type="text" placeholder="search" />
                            </form>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>Photo</th>
                                        <th>Product ID</th>
                                        <th>Availability</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sport Shoes</td>
                                        <td>
                                            <img src="/assets/images/products/01.png" className="product-img-2" alt="product img" style={{ height: "80px", width: "90px" }} />
                                        </td>
                                        <td>#9405822</td>
                                        <td><span className="badge bg-light-success text-success w-50">Available</span></td>
                                        <td>$1250.00</td>
                                    </tr>

                                    <tr>
                                        <td>Man Headcap</td>
                                        <td>
                                            <img src="/assets/images/products/02.png" className="product-img-2" alt="product img" style={{ height: "80px", width: "90px" }} />
                                        </td>
                                        <td>#8304620</td>
                                        <td><span className="badge bg-light-success text-success w-50">Available</span></td>
                                        <td>$1500.00</td>
                                    </tr>

                                    <tr>
                                        <td>Sunglass</td>
                                        <td>
                                            <img src="/assets/images/products/03.png" className="product-img-2" alt="product img" style={{ height: "80px", width: "90px" }} />
                                        </td>
                                        <td>#4736890</td>
                                        <td><span className="badge bg-light-danger text-danger w-50">Un-available</span></td>
                                        <td>$1400.00</td>
                                    </tr>

                                    <tr>
                                        <td>Shirt Formal</td>
                                        <td>
                                            <img src="/assets/images/products/04.png" className="product-img-2" alt="product img" style={{ height: "80px", width: "90px" }} />
                                        </td>
                                        <td>#8543765</td>
                                        <td><span className="badge bg-light-success text-success w-50">Available</span></td>
                                        <td>$1200.00</td>
                                    </tr>

                                    <tr>
                                        <td>Black Coat Pant</td>
                                        <td>
                                            <img src="/assets/images/products/06.png" className="product-img-2" alt="product img" style={{ height: "80px", width: "90px" }} />
                                        </td>
                                        <td>#9629240</td>
                                        <td><span className="badge bg-light-success text-success w-50">Available</span></td>
                                        <td>$1500.00</td>
                                    </tr>

                                    <tr>
                                        <td>Heals</td>
                                        <td>
                                            <img src="/assets/images/products/05.png" className="product-img-2" alt="product img" style={{ height: "80px", width: "90px" }} />
                                        </td>
                                        <td>#8506790</td>
                                        <td><span className="badge bg-light-danger text-danger w-50">Un-available</span></td>
                                        <td>$1800.00</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-5 d-flex align-items-center">
                                <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                            </div>
                            <div className="col-sm-12 col-md-7 d-flex justify-content-end mt-2">
                                <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                                    <ul className="pagination">
                                        <li className="paginate_button page-item previous disabled" id="example_previous">
                                            <Link to="#" aria-controls="example" data-dt-idx="0" tabIndex={0} className="page-link">Prev</Link>
                                        </li>
                                        <li className="paginate_button page-item active">
                                            <Link to="#" aria-controls="example" data-dt-idx="1" tabIndex={0} className="page-link">1</Link>
                                        </li>
                                        <li className="paginate_button page-item ">
                                            <Link to="#" aria-controls="example" data-dt-idx="2" tabIndex={0} className="page-link">2</Link>
                                        </li>
                                        <li className="paginate_button page-item ">
                                            <Link to="#" aria-controls="example" data-dt-idx="3" tabIndex={0} className="page-link">3</Link>
                                        </li>
                                        <li className="paginate_button page-item ">
                                            <Link to="#" aria-controls="example" data-dt-idx="4" tabIndex={0} className="page-link">4</Link>
                                        </li>
                                        <li className="paginate_button page-item ">
                                            <Link to="#" aria-controls="example" data-dt-idx="5" tabIndex={0} className="page-link">5</Link>
                                        </li>
                                        <li className="paginate_button page-item ">
                                            <Link to="#" aria-controls="example" data-dt-idx="6" tabIndex={0} className="page-link">6</Link>
                                        </li>
                                        <li className="paginate_button page-item next" id="example_next">
                                            <Link to="#" aria-controls="example" data-dt-idx="7" tabIndex={0} className="page-link">Next</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
};

export default AllProducts;