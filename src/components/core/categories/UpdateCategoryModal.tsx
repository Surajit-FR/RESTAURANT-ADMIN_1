import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CategoryData } from "../../../types/categoryTypes";
import { categoryValidationSchema } from "../../../helper/FormValidation";
import { AppDispatch } from "../../../store/Store";
import { updateCategoryRequest } from "../../../store/reducers/CategoryReducers";

interface ProductDetailsModalProps {
    modalId: string,
    categoryData: CategoryData | undefined,
    pageNumber: number,
    dataPerPage: number,
}

const UpdateCategoryModal = ({ modalId, categoryData, pageNumber, dataPerPage }: ProductDetailsModalProps): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    // taking form values
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, resetForm, setValues } = useFormik({
        initialValues: {
            categoryName: "",
            categoryDesc: "",
        },
        validationSchema: categoryValidationSchema,
        onSubmit: (values) => {
            dispatch(updateCategoryRequest({
                categoryId: categoryData?._id,
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

    useEffect(() => {
        if (categoryData) {
            setValues({
                categoryName: categoryData?.categoryName || "",
                categoryDesc: categoryData?.categoryDesc || "",
            });
        }
    }, [categoryData, setValues]);

    return (
        <>
            <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* Heading */}
                            <h4 className="modal-title">Update Category</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-12 col-lg-12 d-flex">
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
                                                    >Update</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateCategoryModal;