import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';  // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductDetailsModalProps {
    modalId: string;
    productID: string;
}

const ProductDetailsModal = ({ modalId }: ProductDetailsModalProps): JSX.Element => {
    const { singleProductData } = useSelector((state: RootState) => state.productSlice);

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
            <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{singleProductData?.productTitle}</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Swiper Image Slider */}
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                navigation={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                modules={[Navigation, Pagination, Autoplay]}
                            >
                                {singleProductData?.productImages?.map((image: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <div style={imageContainer} className="shadow mb-5 bg-white rounded">
                                            <img
                                                src={image}
                                                alt={`Product ${index + 1}`}
                                                style={imageContainerImg}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="row">
                                <div className="col-md-12">
                                    <h5 style={{ fontSize: "16px" }}>Title:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                            {singleProductData?.productTitle}
                                        </span>
                                    </h5>
                                </div>
                                <hr />

                                <div className="col-md-6">
                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>Category:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData?.category?.categoryName}
                                            </span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>Product Price:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData?.price ? `₹${Number(singleProductData?.price).toFixed(2)}` : "N/A"}
                                            </span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>Offer:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData?.offer === "true" ? "Yes" : "No"}
                                            </span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>Offer Percentage(%):
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData?.offerPercentage ? (Number(singleProductData?.offerPercentage)).toFixed(2) : "N/A"}
                                            </span>
                                        </h5>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>Availability:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {
                                                    singleProductData?.availability === "in_stock" ? "In stock"
                                                        : singleProductData?.availability === "out_of_stock" ? "Out of stock" : "Pre order"
                                                }
                                            </span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>Visibility:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData?.visibility === "public" ? "Public" : "Private"}
                                            </span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>SKU:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData?.sku}
                                            </span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 style={{ fontSize: "16px" }}>
                                            Tags:
                                            <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                                {singleProductData && Array.isArray(singleProductData.tags) && singleProductData.tags.length > 0
                                                    ? singleProductData.tags.map(tag => `#${tag}`).join(', ')
                                                    : "N/A"}
                                            </span>
                                        </h5>
                                    </div>
                                </div>

                                <hr />
                                <div className="col-md-12">
                                    <h5 style={{ fontSize: "16px" }}>Product Description:
                                        <span className="mx-2" style={{ fontWeight: "normal", fontSize: "14px" }}>
                                            {singleProductData?.productDescription}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsModal;