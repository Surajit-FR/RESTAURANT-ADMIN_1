import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import Product from "../../components/core/products/Product";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_PRODUCT_PER_PAGE } from "../../config/App.config";
import Search from "../../components/common/Search";
import ConfModal from "../../components/ConfModal";
import UpdateProductModal from "../../components/core/products/UpdateProductModal";
import { checkPermissions, permissionsToCheck } from "../../helper/CheckPermissions";
import { AppDispatch, RootState } from "../../store/Store";
import { ProductData } from "../../types/productTypes";
import { CategoryData } from "../../types/categoryTypes";
import { deleteProductRequest, getAllProductRequest } from "../../store/reducers/ProductReducers";
import { getAllCategoryRequest } from "../../store/reducers/CategoryReducers";
import ProductDetailsModal from "../../components/core/products/ProductDetailsModal";

const Products = (): JSX.Element => {
    const { categoryData } = useSelector((state: RootState) => state.categorySlice);
    const { productData } = useSelector((state: RootState) => state.productSlice);
    const { userData } = useSelector((state: any) => state.userSlice);
    const dispatch: AppDispatch = useDispatch();

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [productStateData, setProductStateData] = useState<Array<ProductData>>();
    const [categoryStateData, setCategoryStateData] = useState<Array<CategoryData>>();
    const [productID, setProductID] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // Pagination
    const dataPerPage = REACT_APP_PRODUCT_PER_PAGE;
    const pageCount = productData?.pagination?.totalPages;

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    const handleDelete = () => {
        if (categoryStateData) {
            dispatch(deleteProductRequest({
                productId: productID,
                page: (pageNumber + 1),
                limit: dataPerPage,
                query: debouncedSearchQuery,
                sortBy: 'createdAt',
                sortType: 'desc',
                filterId: selectedCategory,
            }));
        };
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    // permissionCheck
    const permissionCheckResult = checkPermissions(userData?.user, permissionsToCheck);

    // Debounce logic for search input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 600);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    useEffect(() => {
        dispatch(getAllProductRequest({
            page: (pageNumber + 1),
            limit: dataPerPage,
            query: debouncedSearchQuery,
            sortBy: 'createdAt',
            sortType: 'desc',
            filterId: selectedCategory,
        }));
        dispatch(getAllCategoryRequest({
            page: (pageNumber + 1),
            limit: dataPerPage,
            query: "",
            sortBy: 'createdAt',
            sortType: 'desc',
        }));
    }, [dispatch, dataPerPage, pageNumber, debouncedSearchQuery, selectedCategory]);

    useEffect(() => {
        setProductStateData(productData?.products);
        setCategoryStateData(categoryData?.categories);
    }, [productData?.products, categoryData?.categories]);


    return (
        <>
            {/* Product Details Modal */}
            <UpdateProductModal
                modalId="updateProductModal"
                pageNumber={pageNumber}
                dataPerPage={dataPerPage}
                debouncedSearchQuery={debouncedSearchQuery}
                selectedCategory={selectedCategory}
            />

            {/* Delete Modal */}
            <ConfModal
                modalId="deleteModal"
                modalHeading="Want To Delete The Product?"
                onDelete={handleDelete}
            />

            {/* Product Details Modal */}
            <ProductDetailsModal
                modalId="productDetails"
                productID={productID}
            />

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
                                {
                                    (permissionCheckResult?.Write || permissionCheckResult?.All) &&
                                    <Link to="/add/product" className="btn btn-primary mb-3 mb-lg-0">
                                        <i className="lni lni-plus me-2">
                                        </i>Add Product
                                    </Link>
                                }
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
                                    placeholder="Search Products"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>

                            {/* Filter dropdown */}
                            <div className="col-lg-2 col-6 col-md-3">
                                <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                                    <option value="">All categories</option>
                                    {categoryStateData && categoryStateData?.map((item) => {
                                        return (
                                            <option key={item?.categoryID} value={item?._id}>{item?.categoryName}</option>
                                        )
                                    })}
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* Alert */}
                    <div className="row d-flex justify-content-center mt-2">
                        <div className="col-4">
                        </div>
                    </div>

                    {/* Products */}
                    <div className="card-body">
                        <div className="product-grid">
                            <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3">

                                {/* Product */}
                                {productStateData && productStateData?.map((item) => {
                                    return (
                                        <Product
                                            key={item?._id}
                                            data={item}
                                            setProductID={id => setProductID(id)}
                                            userData={userData?.user}
                                        />
                                    )
                                })}

                            </div>
                        </div>

                        <nav className="float-end mt-4" aria-label="Page navigation">
                            {/* Pagination */}
                            <Pagination
                                pageCount={pageCount as number}
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