import { Link } from "react-router-dom";
import AddCategory from "../../components/core/categories/AddCategory";
import CategoryList from "../../components/core/categories/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../util/Loader";
import { useEffect, useMemo, useState } from "react";
import { CategoryListType } from "../../config/DataTypes.config";
import { getAllCategory } from "../../services/slices/UtilitySlice";

const Categories = (): JSX.Element => {
    const { category_data, loading } = useSelector((state: any) => state.utilitySlice);
    const dispatch: any = useDispatch();

    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');

    // header
    const header = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${_TOKEN}`
        }
    }), [_TOKEN]);

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [categoryData, setCategoryData] = useState<CategoryListType[]>();

    // pagination
    const dataPerPage = 5;
    const pagesVisited = pageNumber * dataPerPage;
    const newData = categoryData?.slice(pagesVisited, pagesVisited + dataPerPage); // will be looped for show data
    const pageCount = Math.ceil((categoryData?.length || 0) / dataPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };


    useEffect(() => {
        dispatch(getAllCategory(header));
    }, [dispatch, header]);

    useEffect(() => {
        setCategoryData(category_data?.data);
    }, [category_data]);

    return (
        <>
            {/* Loader */}
            {loading && <Loader />}

            {/* <!--start content--> */}
            <main className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Product & Category</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Categories</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!--end breadcrumb--> */}

                <div className="card">
                    <div className="card-header py-3">
                        <h6 className="mb-0">Add Product Category</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {/* Add category */}
                            <AddCategory
                                pageCount={pageCount}
                                changePage={changePage}
                            />

                            {/* All Category */}
                            <CategoryList
                                newData={newData}
                                pageCount={pageCount}
                                changePage={changePage}
                            />
                        </div>
                        {/* <!--end row--> */}
                    </div>
                </div>

            </main>
        </>
    );
};

export default Categories;