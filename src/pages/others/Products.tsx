import { Link } from "react-router-dom";
import Pagination from "../../util/Pagination";
import { useEffect, useMemo, useState } from "react";
import Product from "../../components/core/products/Product";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getAllCategory, getAllProduct } from "../../services/slices/UtilitySlice";
import { CategoryListType, ProductListType } from "../../config/DataTypes.config";
import { REACT_APP_DATA_PER_PAGE } from "../../config/App.config";
import Search from "../../components/common/Search";

const Products = (): JSX.Element => {
    const { products_data, category_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');

    const header = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${_TOKEN}`
        }
    }), [_TOKEN]);

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [productData, setProductData] = useState<ProductListType[]>([]);
    const [categoryData, setCategoryData] = useState<CategoryListType[]>([]);

    // pagination
    const dataPerPage = REACT_APP_DATA_PER_PAGE;
    const pageCount = products_data?.totalPages;

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        dispatch(getAllProduct({ page: (pageNumber + 1), pageSize: dataPerPage, header }));
        dispatch(getAllCategory({ header }));
    }, [dispatch, dataPerPage, header, pageNumber]);

    useEffect(() => {
        setProductData(products_data?.data);
        setCategoryData(category_data?.data);
    }, [products_data, category_data]);

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

                            {/* Search Products */}
                            <div className="col-lg-3 col-md-6 me-auto">
                                <Search
                                    placeholder="Search Produts"
                                />
                            </div>

                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select">
                                    <option>All category</option>
                                    {categoryData && categoryData.map((item) => {
                                        return (
                                            <option key={item?.categoryID} value={item?._id}>{item?.category_name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="product-grid">
                            <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3">

                                {/* Products */}
                                {productData && productData?.map((item) => {
                                    return (
                                        <Product
                                            key={item?._id}
                                            data={item}
                                        />
                                    )
                                })}

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