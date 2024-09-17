import { Link } from "react-router-dom";
import AddCategory from "../../components/core/categories/AddCategory";
import CategoryList from "../../components/core/categories/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import ConfModal from "../../util/ConfModal";
import { REACT_APP_CATEGORY_PER_PAGE } from "../../config/App.config";
import UpdateCategoryModal from "../../util/UpdateCategoryModal";
import { checkPermissions, permissionsToCheck } from "../../helper/CheckPermissions";
import { deleteCategoryRequest, getAllCategoryRequest } from "../../store/reducers/CategoryReducers";
import { AppDispatch, RootState } from "../../store/Store";
import { CategoryData } from "../../types/categoryTypes";

const Categories = (): JSX.Element => {
    const { categoryData } = useSelector((state: RootState) => state.categorySlice);
    const { userData } = useSelector((state: RootState) => state.userSlice);
    const dispatch: AppDispatch = useDispatch();

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [categoryID, setCategoryID] = useState<string>('');
    const [categoryStateData, setCategoryStateData] = useState<Array<CategoryData>>();

    const dataPerPage = REACT_APP_CATEGORY_PER_PAGE;
    const pageCount = categoryData?.pagination?.totalPages as number;

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    const handleDelete = () => {
        if (categoryStateData) {
            dispatch(deleteCategoryRequest({
                categoryId: categoryID,
                page: (pageNumber + 1),
                limit: dataPerPage,
                query: '',
                sortBy: 'createdAt',
                sortType: 'desc',
            }));
        }
    };

    const selectedCategory = useMemo(() => {
        return categoryStateData?.find(category => category?._id === categoryID);
    }, [categoryID, categoryStateData]);

    // permissionCheck
    const permissionCheckResult = checkPermissions(userData?.user, permissionsToCheck);

    useEffect(() => {
        dispatch(getAllCategoryRequest({
            page: (pageNumber + 1),
            limit: dataPerPage,
            query: "",
            sortBy: "",
            sortType: "",
        }));
    }, [dispatch, pageNumber, dataPerPage]);

    useEffect(() => {
        setCategoryStateData(categoryData?.categories);
    }, [categoryData]);


    return (
        <>
            {/* Update Modal */}
            <UpdateCategoryModal
                pageNumber={pageNumber}
                modalId="updateCategoryModal"
                dataPerPage={dataPerPage}
                categoryData={selectedCategory}
            />

            {/* Delete Modal */}
            <ConfModal
                modalId="deleteModal"
                modalHeading="Want To Delete The Category?"
                onDelete={handleDelete}
            />

            <main className="page-content">
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

                <div className="card">
                    <div className="card-header py-3">
                        <h6 className="mb-0">Add Product Category</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                (permissionCheckResult?.Write || permissionCheckResult?.All) &&
                                <AddCategory
                                    pageCount={pageCount}
                                    pageNumber={pageNumber}
                                    changePage={changePage}
                                />
                            }

                            <CategoryList
                                newData={categoryStateData}
                                pageCount={pageCount}
                                pageNumber={pageNumber}
                                changePage={changePage}
                                setCategoryID={id => setCategoryID(id)}
                                permissionCheckResult={permissionCheckResult}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Categories;