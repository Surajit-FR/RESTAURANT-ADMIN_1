import { useSelector } from "react-redux";
import { CustomHeadersType } from "../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../config/App.config";

interface ProductDetailsModalProps {
    modalId: string;
    productID: string;
    header: CustomHeadersType | undefined
}

const ProductDetailsModal = ({ modalId, productID, header }: ProductDetailsModalProps): JSX.Element => {
    const { products_details_data } = useSelector((state: any) => state.utilitySlice);

    const imageContainer: React.CSSProperties = {
        height: "400px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
    };
    const imageContainerImg: React.CSSProperties = {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "5px",
    };

    return (
        <>
            <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* Heading */}
                            <h4 className="modal-title">
                                {products_details_data?.data?.productTitle}
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Image */}
                            <div style={imageContainer} className="shadow mb-5 bg-white rounded">
                                <img
                                    src={`${REACT_APP_BASE_URL}/${products_details_data?.data?.productImage}`}
                                    alt="Product"
                                    style={imageContainerImg}
                                />
                            </div>

                            <div className="row mt-4">
                                {/* Product Offer */}
                                <div className="col-md-6">
                                    <h5 style={{ fontSize: "16px" }}>Product Offer:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>{products_details_data?.data?.offer === "true" ? "Yes" : "N/A"}</span>
                                    </h5>
                                </div>

                                {/* Offer Percentage */}
                                <div className="col-md-6">
                                    <h5 style={{ fontSize: "16px" }}>Offer Percentage:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>{products_details_data?.data?.offerPercentage ? (Number(products_details_data?.data?.offerPercentage)).toFixed(2) : "N/A"}</span>
                                    </h5>
                                </div>

                                {/* Product Price */}
                                <div className="col-md-6">
                                    <h5 style={{ fontSize: "16px" }}>Product Price:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>{products_details_data?.data?.price ? `₹${Number(products_details_data?.data?.price).toFixed(2)}` : "N/A"}</span>
                                    </h5>
                                </div>

                                {/* Product Availability */}
                                <div className="col-md-6">
                                    <h5 style={{ fontSize: "16px" }}>Availability
                                        <span className="mx-2">
                                            {products_details_data?.data?.availability ? <i className="bi bi-check2-square text-success"></i> : <i className="bi bi-x-square text-danger"></i>}
                                        </span>
                                    </h5>
                                </div>

                                {/* Product Visibility */}
                                <div className="col-md-6">
                                    <h5 style={{ fontSize: "16px" }}>Visibility
                                        <span className="mx-2">{products_details_data?.data?.visibility ? <i className="bi bi-check2-square text-success"></i> : <i className="bi bi-x-square text-danger"></i>}</span>
                                    </h5>
                                </div>

                                {/* Product Category */}
                                <div className="col-md-6">
                                    <h5 style={{ fontSize: "16px" }}>Product Category:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>{products_details_data?.data?.category ? products_details_data?.data?.category?.category_name : "N/A"}</span>
                                    </h5>
                                </div>

                                <hr />
                                {/* Product Description */}
                                <div className="col-md-12">
                                    <h5 style={{ fontSize: "16px" }}>Product Description:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                            {products_details_data?.data?.productDescription ? products_details_data?.data?.productDescription : "N/A"}
                                        </span>
                                    </h5>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsModal;