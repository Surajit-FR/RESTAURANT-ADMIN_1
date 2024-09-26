import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addProductValidationSchema } from "../../../helper/FormValidation";
import { CategoryData } from "../../../types/categoryTypes";
import { AppDispatch, RootState } from "../../../store/Store";
import { getAllCategoryRequest } from "../../../store/reducers/CategoryReducers";
import { updateProductRequest } from "../../../store/reducers/ProductReducers";

interface ProductDetailsModalProps {
    modalId: string;
    pageNumber: number;
    dataPerPage: number;
    debouncedSearchQuery: string;
    selectedCategory: string;
}

const UpdateProductModal = ({
    modalId,
    pageNumber,
    dataPerPage,
    debouncedSearchQuery,
    selectedCategory,
}: ProductDetailsModalProps) => {
    const { categoryData } = useSelector((state: RootState) => state.categorySlice);
    const { singleProductData } = useSelector((state: RootState) => state.productSlice);
    const dispatch: AppDispatch = useDispatch();

    const [categoryStateData, setCategoryStateData] = useState<Array<CategoryData>>();
    const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
    const [productImagesPreview, setProductImagesPreview] = useState<string[]>([]);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, setFieldValue, setValues, setFieldTouched, resetForm } = useFormik({
        initialValues: {
            productTitle: "",
            sku: "",
            offer: "false",
            offerPercentage: "",
            coverImage: "",
            productImages: [] as Array<string>,
            productDescription: "",
            price: "",
            availability: "in_stock",
            visibility: "public",
            category: "",
            tags: [] as Array<string>,
        },
        validationSchema: addProductValidationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("productTitle", values.productTitle);
            formData.append("sku", values.sku);
            formData.append("offer", values.offer);
            formData.append("offerPercentage", values.offerPercentage);
            formData.append("productDescription", values.productDescription);
            formData.append("price", values.price);
            formData.append("availability", values.availability);
            formData.append("visibility", values.visibility);
            formData.append("category", values.category);

            // Append each tag individually to the FormData
            values.tags.forEach(tag => {
                formData.append("tags[]", tag);
            });

            if (values.coverImage) {
                formData.append("coverImage", values.coverImage as unknown as File);
            }

            values.productImages.forEach((image) => {
                formData.append("productImages", image);
            });

            dispatch(updateProductRequest({
                data: formData,
                productId: singleProductData?._id,
                resetForm,
                page: (pageNumber + 1),
                limit: dataPerPage,
                query: debouncedSearchQuery,
                sortBy: 'createdAt',
                sortType: 'desc',
                filterId: selectedCategory,
            }));
        },
    });

    // Function to handle adding a tag
    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            e.preventDefault();
            const newTag = e.currentTarget.value.trim();

            setFieldValue("tags", [...values.tags, newTag]);
            setFieldTouched("tags", true, true);
            e.currentTarget.value = '';
        }
    };

    // Function to remove a tag
    const handleRemoveTag = (tag: string) => {
        setFieldValue("tags", values.tags.filter(t => t !== tag));
    };


    const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            const file = e.currentTarget.files[0];
            setCoverImagePreview(URL.createObjectURL(file));
            setFieldValue("coverImage", file);
        }
    };

    const handleProductImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.currentTarget.files || []);
        const filePreviews = files.map((file) => URL.createObjectURL(file));
        setProductImagesPreview(filePreviews);
        setFieldValue("productImages", files);
    };

    const handleRemoveProductImage = (index: number) => {
        const updatedImages = [...productImagesPreview];
        updatedImages.splice(index, 1);
        setProductImagesPreview(updatedImages);
        const updatedFiles = [...values.productImages];
        updatedFiles.splice(index, 1);
        setFieldValue("productImages", updatedFiles);
    };

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
                sku: singleProductData?.sku || "",
                offer: singleProductData?.offer || "false",
                offerPercentage: singleProductData?.offerPercentage || "",
                coverImage: singleProductData?.coverImage || "",
                productDescription: singleProductData?.productDescription || "",
                price: singleProductData?.price || "",
                availability: singleProductData?.availability || "",
                visibility: singleProductData?.visibility || "",
                category: singleProductData?.category?._id || "",
                productImages: singleProductData?.productImages || [],
                tags: singleProductData?.tags || [],
            });
            if (singleProductData?.coverImage) {
                setCoverImagePreview(singleProductData?.coverImage);
            }

            if (singleProductData.productImages) {
                setProductImagesPreview(singleProductData.productImages);
            }
        }
    }, [singleProductData, setValues]);


    return (
        <>
            <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Update Product</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-12 col-lg-8">
                                    <div className="card shadow-none bg-light border">
                                        <div className="card-body">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Product title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Product title"
                                                        name="productTitle"
                                                        value={values.productTitle}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ border: touched.productTitle && errors.productTitle ? "1px solid red" : "" }}
                                                    />
                                                    {touched.productTitle && errors.productTitle && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.productTitle}</div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">SKU</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="SKU"
                                                        name="sku"
                                                        value={values.sku}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ border: touched.sku && errors.sku ? "1px solid red" : "" }}
                                                    />
                                                    {touched.sku && errors.sku && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.sku}</div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Tags</label>
                                                    <div className="tags-input-container">
                                                        {values.tags.map((tag, index) => (
                                                            <div key={index} className="tag mb-2">
                                                                {tag}
                                                                <span className="tag-remove" onClick={() => handleRemoveTag(tag)}>x</span>
                                                            </div>
                                                        ))}
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Add a tag and press Enter"
                                                            onKeyDown={handleAddTag}
                                                        />
                                                    </div>
                                                    {touched.tags && errors.tags && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.tags}</div>
                                                    )}
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <label className="form-label">Offer</label>
                                                    <select
                                                        className="form-select"
                                                        name="offer"
                                                        value={values.offer}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="true">Yes</option>
                                                        <option value="false">No</option>
                                                    </select>
                                                    {touched.offer && errors.offer && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.offer}</div>
                                                    )}
                                                </div>

                                                <div className="col-12 col-lg-6">
                                                    <label className="form-label">Offer Percentage</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Percentage"
                                                        name="offerPercentage"
                                                        value={values.offerPercentage}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={values.offer === "false"}
                                                        style={{ border: touched.offerPercentage && errors.offerPercentage ? "1px solid red" : "" }}
                                                    />
                                                    {touched.offerPercentage && errors.offerPercentage && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.offerPercentage}</div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Cover Image</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        onChange={handleCoverImageChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {coverImagePreview && (
                                                        <img
                                                            src={coverImagePreview}
                                                            alt="Cover Preview"
                                                            style={{
                                                                maxWidth: "100%",
                                                                maxHeight: "200px",
                                                                margin: "10px 0",
                                                            }}
                                                        />
                                                    )}
                                                    {errors.coverImage && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>
                                                            *{errors.coverImage}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Product Images</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        multiple
                                                        onChange={handleProductImagesChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <div className="d-flex flex-wrap mt-2">
                                                        {productImagesPreview.length > 0 &&
                                                            productImagesPreview.map((preview, index) => (
                                                                <div key={index} style={{ position: "relative", margin: "5px" }}>
                                                                    <img
                                                                        src={preview}
                                                                        alt={`Product Preview ${index + 1}`}
                                                                        style={{
                                                                            width: "80px",
                                                                            height: "80px",
                                                                            objectFit: "cover",
                                                                        }}
                                                                    />
                                                                    <button
                                                                        onClick={() => handleRemoveProductImage(index)}
                                                                        style={{
                                                                            position: "absolute",
                                                                            top: "0",
                                                                            right: "0",
                                                                            background: "none",
                                                                            border: "none",
                                                                            cursor: "pointer",
                                                                            color: "red",
                                                                            fontSize: "16px",
                                                                        }}
                                                                        title="Remove Image"
                                                                    >
                                                                        &times;
                                                                    </button>
                                                                </div>
                                                            ))}
                                                    </div>
                                                    {errors.productImages && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>
                                                            {Array.isArray(errors.productImages)
                                                                ? errors.productImages.map((error, index) => (
                                                                    <div key={index}>*{error}</div>
                                                                ))
                                                                : `*${errors.productImages}`}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Product Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Full description"
                                                        rows={4}
                                                        name="productDescription"
                                                        value={values.productDescription}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    ></textarea>
                                                    {touched.productDescription && errors.productDescription && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.productDescription}</div>
                                                    )}
                                                </div>

                                                <div className="ms-auto">
                                                    <button type="submit" className="btn btn-primary" disabled={!isValid}>Update Product</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="card shadow-none bg-light border">
                                        <div className="card-body">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Price</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Price"
                                                        name="price"
                                                        value={values.price}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ border: touched.price && errors.price ? "1px solid red" : "" }}
                                                    />
                                                    {touched.price && errors.price && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.price}</div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Availability</label>
                                                    <select
                                                        className="form-select"
                                                        name="availability"
                                                        value={values.availability}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="in_stock">In Stock</option>
                                                        <option value="out_of_stock">Out Of Stock</option>
                                                        <option value="pre_order">Pre Order</option>
                                                    </select>
                                                    {touched.availability && errors.availability && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.availability}</div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">Product Visibility</label>
                                                    <select
                                                        className="form-select"
                                                        name="visibility"
                                                        value={values.visibility}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="public">Public</option>
                                                        <option value="private">Private</option>
                                                    </select>
                                                    {touched.visibility && errors.visibility && (
                                                        <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.visibility}</div>
                                                    )}
                                                </div>

                                                <div className="col-12">
                                                    <h5>Categories</h5>
                                                    <div className="category-list">
                                                        {categoryStateData && categoryStateData.map((item) => (
                                                            <div className="form-check" key={item?._id}>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    id={item?._id}
                                                                    name="category"
                                                                    value={item?._id}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    checked={values.category === item?._id}
                                                                />
                                                                <label className="form-check-label" htmlFor={item?._id}>
                                                                    {item?.categoryName}
                                                                </label>
                                                            </div>
                                                        ))}
                                                        {errors.category && (
                                                            <div className="text-danger" style={{ fontSize: "13px" }}>*{errors.category}</div>
                                                        )}
                                                    </div>
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
        </>
    );
};

export default UpdateProductModal;