import { Link } from "react-router-dom";
import Pagination from "../../util/Pagination";
import { useState } from "react";
import Product from "../../components/core/products/Product";

const Products = (): JSX.Element => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const blogData: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // pagination
    const dataPerPage = 5;
    const pagesVisited = pageNumber * dataPerPage;
    const newBlogData = blogData?.slice(pagesVisited, pagesVisited + dataPerPage); // will be looped for show data
    const pageCount = Math.ceil((blogData?.length || 0) / dataPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    console.log({ newBlogData });

    return (
        <>
            {/* <!--content--> */}
            <main className="page-content">

                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Product & Category</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-xl-2">
                                <Link to="/add/product" className="btn btn-primary mb-3 mb-lg-0">
                                    <i className="bi bi-plus-square-fill me-2">
                                    </i>Add Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header py-3">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-3 col-md-6 me-auto">
                                <div className="ms-auto position-relative">
                                    <div className="position-absolute top-50 translate-middle-y search-icon px-3"><i className="bi bi-search"></i>
                                    </div>
                                    <input className="form-control ps-5" type="text" placeholder="search produts" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>All category</option>
                                    <option>Fashion</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="product-grid">
                            <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3">

                                {/* Products */}
                                <Product />

                            </div>
                        </div>

                        <nav className="float-end mt-4" aria-label="Page navigation">
                            {/* Pagination */}
                            <Pagination
                                pageCount={pageCount}
                                pageNumber={pageNumber}
                                changePage={changePage}
                            />
                        </nav>

                    </div>
                </div>

            </main>
        </>
    );
};

export default Products;