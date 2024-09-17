import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addProductValidationSchema } from "../helper/FormValidation";
import { CategoryData } from "../types/categoryTypes";
import { AppDispatch, RootState } from "../store/Store";
import { getAllCategoryRequest } from "../store/reducers/CategoryReducers";

interface ProductDetailsModalProps {
    modalId: string;
    pageNumber: number;
    dataPerPage: number;
    debouncedSearchQuery: string,
    selectedCategory: string,
}

const UpdateProductModal = ({ modalId, pageNumber, dataPerPage, debouncedSearchQuery, selectedCategory }: ProductDetailsModalProps) => {
    const { categoryData } = useSelector((state: RootState) => state.categorySlice);
    const { singleProductData } = useSelector((state: RootState) => state.productSlice);
    const dispatch: AppDispatch = useDispatch();

    const [categoryStateData, setCategoryStateData] = useState<Array<CategoryData>>();
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, setFieldValue, setValues } = useFormik({
        initialValues: {
            productTitle: "",
            offer: "false",
            offerPercentage: "",
            coverImage: "",
            productDescription: "",
            price: "",
            availability: "",
            visibility: "",
            category: "",
        },
        validationSchema: addProductValidationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("productTitle", values.productTitle);
            formData.append("offer", values.offer.toString());
            formData.append("offerPercentage", values.offerPercentage);
            formData.append("productDescription", values.productDescription);
            formData.append("price", values.price);
            formData.append("availability", values.availability);
            formData.append("visibility", values.visibility);
            formData.append("category", values.category);

            // Only append the coverImage file if it's a new file, not the existing image URL
            if (values.coverImage && typeof values.coverImage !== 'string') {
                formData.append("coverImage", values.coverImage);
            }

            // dispatch(updateProduct({
            //     data: formData,
            //     product_id: products_details_data?.data?._id,
            //     page: (pageNumber + 1),
            //     pageSize: dataPerPage,
            //     search: debouncedSearchQuery,
            //     category: selectedCategory,
            // }));
        }
    });

    useEffect(() => {
        dispatch(getAllCategoryRequest({
            page: (pageNumber + 1),
            limit: dataPerPage,
            query: debouncedSearchQuery,
            sortBy: 'createdAt',
            sortType: 'desc',
        }));
    }, [dispatch, pageNumber, dataPerPage, debouncedSearchQuery]);

    useEffect(() => {
        setCategoryStateData(categoryData?.categories);
    }, [categoryData]);

    useEffect(() => {
        if (singleProductData) {
            setValues({
                productTitle: singleProductData?.productTitle || "",
                offer: singleProductData?.offer || "false",
                offerPercentage: singleProductData?.offerPercentage || "",
                coverImage: singleProductData?.coverImage || "",
                productDescription: singleProductData?.productDescription || "",
                price: singleProductData?.price || "",
                availability: singleProductData?.availability || "",
                visibility: singleProductData?.visibility || "",
                category: singleProductData?.category?._id || "",
            });
            if (singleProductData?.coverImage) {
                setImagePreview(singleProductData?.coverImage);
            };
        };
    }, [singleProductData, setValues]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            const file = e.currentTarget.files[0];
            setImagePreview(URL.createObjectURL(file));
            setFieldValue("productImage", file);
        }
    };

    return (
        <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Update Product</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-12 col-lg-8">
                                        <div className="card shadow-none bg-light border">
                                            <div className="row g-3 card-body">

                                                <div className="col-12">
                                                    <label className="form-label">Product title</label>
                                                    <input
                                                        id="productTitle"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Product title"
                                                        name="productTitle"
                                                        value={values?.productTitle}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ border: touched.productTitle && errors.productTitle ? "1px solid red" : "" }}
                                                    />
                                                    {touched.productTitle && errors.productTitle && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.productTitle}</div>}
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <label className="form-label" htmlFor="offer">Offer</label>
                                                    <select
                                                        id="offer"
                                                        className="form-select"
                                                        name="offer"
                                                        value={values?.offer.toString()}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="true">Yes</option>
                                                        <option value="false">No</option>
                                                    </select>
                                                    {touched.offer && errors.offer && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.offer}</div>}
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <label className="form-label" htmlFor="offerPercentage">Offer Percentage</label>
                                                    <input
                                                        id="offerPercentage"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Percentage"
                                                        name="offerPercentage"
                                                        value={values?.offerPercentage}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={values?.offer === "false"}
                                                        style={{ border: touched.offerPercentage && errors.offerPercentage ? "1px solid red" : "" }}
                                                    />
                                                    {touched.offerPercentage && errors.offerPercentage && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.offerPercentage}</div>}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label" htmlFor="coverImage">Product Images</label>
                                                    <input
                                                        id="coverImage"
                                                        className="form-control"
                                                        type="file"
                                                        onChange={handleImageChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {imagePreview &&
                                                        <img
                                                            src={imagePreview}
                                                            alt="Product Preview"
                                                            style={{
                                                                maxWidth: "100%",
                                                                maxHeight: "250px",
                                                                margin: "10px 0",
                                                                border: "1px solid black",
                                                                objectFit: "contain"
                                                            }}
                                                        />
                                                    }
                                                    {touched.coverImage && errors.coverImage && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.coverImage}</div>}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label" htmlFor="productDescription">Product description</label>
                                                    <textarea
                                                        id="productDescription"
                                                        className="form-control"
                                                        placeholder="Full description"
                                                        rows={4}
                                                        name="productDescription"
                                                        value={values?.productDescription}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-auto">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={!isValid}
                                            >Update</button>
                                        </div>

                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <div className="card shadow-none bg-light border">
                                            <div className="card-body">
                                                <div className="row g-3">

                                                    <div className="col-12">
                                                        <label className="form-label" htmlFor="price">Price</label>
                                                        <input
                                                            id="price"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Price"
                                                            name="price"
                                                            value={values?.price}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            style={{ border: touched.price && errors.price ? "1px solid red" : "" }}
                                                        />
                                                        {touched.price && errors.price && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.price}</div>}
                                                    </div>

                                                    <div className="col-12">
                                                        <label className="form-label" htmlFor="availability">Availability</label>
                                                        <select
                                                            id="availability"
                                                            className="form-select"
                                                            name="availability"
                                                            value={values?.availability}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="Available">Available</option>
                                                            <option value="Unavailable">Unavailable</option>
                                                        </select>
                                                        {touched.availability && errors.availability && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.availability}</div>}
                                                    </div>

                                                    <div className="col-12">
                                                        <label className="form-label" htmlFor="visibility">Product Visibility</label>
                                                        <select
                                                            id="visibility"
                                                            className="form-select"
                                                            name="visibility"
                                                            value={values?.visibility}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="Show">Show</option>
                                                            <option value="Hide">Hide</option>
                                                        </select>
                                                        {touched.visibility && errors.visibility && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.visibility}</div>}
                                                    </div>

                                                    <div className="col-12">
                                                        <h5>Categories</h5>
                                                        <div className="category-list">
                                                            {categoryStateData && categoryStateData?.map((item) => (
                                                                <div className="form-check" key={item?._id}>
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        id={item?._id}
                                                                        name="category"
                                                                        value={item?._id}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        checked={values?.category === item?._id}
                                                                    />
                                                                    <label className="form-check-label" htmlFor={item?._id}>
                                                                        {item?.categoryName}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {touched.category && errors.category && <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.category}</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductModal;