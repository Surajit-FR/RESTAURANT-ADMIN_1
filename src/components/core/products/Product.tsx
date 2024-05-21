import { Link } from "react-router-dom";
import { CustomHeadersType, ProductListType } from "../../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../../config/App.config";
import { getProductDetails } from "../../../services/slices/UtilitySlice";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

type DataList_Props = {
    data: ProductListType,
    setProductID: (id: string) => void,
    header: CustomHeadersType | undefined
}

const Product = ({ data, setProductID, header }: DataList_Props): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const imageContainer: React.CSSProperties = {
        height: "200px",
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
        <div className="col">
            <div className="card border shadow-none mb-0">
                <div className="card-body text-center">
                    <div className=" mb-3" style={imageContainer}>
                        <img
                            src={`${REACT_APP_BASE_URL}/${data?.productImage}`}
                            className="img-fluid"
                            alt="Product"
                            style={imageContainerImg}
                        />
                    </div>
                    <h6 className="product-title">{data?.productTitle}</h6>
                    <p className="product-price fs-5 mb-1"><span>₹{Number(data?.price).toFixed(2)}</span></p>

                    <div className="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                        <Link
                            to="#"
                            className="btn btn-sm btn-outline-primary"
                        ><i className="bi bi-pencil-fill"></i>Edit
                        </Link>

                        <Link
                            to="#"
                            className="btn btn-sm btn-outline-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            onClick={() => setProductID(data?._id)}
                        ><i className="bi bi-trash-fill"></i>Delete
                        </Link>

                        <Link
                            to="#"
                            className="btn btn-sm btn-outline-info"
                            data-bs-toggle="modal"
                            data-bs-target="#productDetails"
                            onClick={() => dispatch(getProductDetails({ product_id: data?._id, header }))}
                        ><i className="bi bi-file-text"></i>Detail
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;