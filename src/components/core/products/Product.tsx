import { Link } from "react-router-dom";
import { CustomHeadersType, ProductResponse, UserData } from "../../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../../config/App.config";
import { getProductDetails } from "../../../services/slices/UtilitySlice";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { checkPermissions, permissionsToCheck } from "../../../helper/CheckPermissions";

type DataList_Props = {
    data: ProductResponse,
    setProductID: (id: string) => void,
    userData: UserData,
    header: CustomHeadersType | undefined
}

const Product = ({ data, setProductID, userData, header }: DataList_Props): JSX.Element => {
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

    const permissionCheckResult = checkPermissions(userData, permissionsToCheck);

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
                        {
                            (permissionCheckResult?.edit_update || permissionCheckResult?.all) &&
                            <Link
                                to="#"
                                className="btn btn-sm btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#updateProductModal"
                                onClick={() => dispatch(getProductDetails({ product_id: data?._id, header }))}
                            ><i className="bi bi-pencil-fill"></i>Edit
                            </Link>
                        }
                        {
                            (permissionCheckResult?.delete || permissionCheckResult?.all) &&
                            <Link
                                to="#"
                                className="btn btn-sm btn-outline-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                                onClick={() => setProductID(data?._id)}
                            ><i className="bi bi-trash-fill"></i>Delete
                            </Link>
                        }

                        {
                            (permissionCheckResult?.read || permissionCheckResult?.all) &&
                            <Link
                                to="#"
                                className="btn btn-sm btn-outline-info"
                                data-bs-toggle="modal"
                                data-bs-target="#productDetails"
                                onClick={() => dispatch(getProductDetails({ product_id: data?._id, header }))}
                            ><i className="bi bi-file-text"></i>Detail
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;