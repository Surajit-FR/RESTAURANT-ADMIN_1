import { useFormik } from "formik";
import { categoryValidationSchema } from "../../../helper/FormValidation";
import { useDispatch } from "react-redux";
import { REACT_APP_PRODUCT_PER_PAGE } from "../../../config/App.config";
import { AppDispatch } from "../../../store/Store";
import { addCategoryRequest } from "../../../store/reducers/CategoryReducers";

type addCategory_props = {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
}

const AddCategory = ({ pageNumber }: addCategory_props): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    // dataPerPage
    const dataPerPage = REACT_APP_PRODUCT_PER_PAGE;

    // taking form values
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, resetForm } = useFormik({
        initialValues: {
            categoryName: "",
            categoryDesc: "",
        },
        validationSchema: categoryValidationSchema,
        onSubmit: (values) => {
            dispatch(addCategoryRequest({
                data: values,
                page: (pageNumber + 1),
                limit: dataPerPage,
                query: '',
                sortBy: 'createdAt',
                sortType: 'desc',
                resetForm
            }));
        }
    });

    // renderError func.
    const renderError = (error: any) => {
        if (typeof error === "string") {
            return <p className='text-danger m-1' style={{ fontSize: "11.5px" }}>*{error}</p>;
        }
        return null;
    };

    return (
        <>
            <div className="col-12 col-lg-4 d-flex">
                <div className="card border shadow-none w-100">
                    <div className="card-body">

                        <form className="row g-3" onSubmit={handleSubmit}>
                            {/* Category Name */}
                            <div className="col-12">
                                <label className="form-label" htmlFor='CategoryName'>Category Name</label>
                                <input
                                    id="CategoryName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Category name"
                                    name="categoryName"
                                    value={values?.categoryName || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.categoryName && errors?.categoryName ? "1px solid red" : "" }}
                                />
                            </div>
                            {touched?.categoryName && renderError(errors?.categoryName)}

                            {/* Category Description */}
                            <div className="col-12">
                                <label className="form-label" htmlFor='CategoryDescription'>Description (If any)</label>
                                <textarea
                                    id="CategoryDescription"
                                    className="form-control"
                                    rows={3}
                                    cols={3}
                                    name="categoryDesc"
                                    placeholder="Category Description"
                                    value={values?.categoryDesc || ""}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Button */}
                            <div className="col-12">
                                <div className="d-grid">
                                    <button
                                        type='submit'
                                        className="btn btn-primary"
                                        disabled={!isValid}
                                    >Add Category</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCategory;