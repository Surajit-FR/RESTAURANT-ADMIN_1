import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkPermissions, permissionsToCheck } from "../../../helper/CheckPermissions";
import { User } from "../../../types/authTypes";
import { ProductData } from "../../../types/productTypes";
import { AppDispatch } from "../../../store/Store";
import { getProductRequest } from "../../../store/reducers/ProductReducers";

type DataList_Props = {
    data: ProductData,
    setProductID: (id: string) => void,
    userData: User
}

const Product = ({ data, setProductID, userData }: DataList_Props): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

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
                            src={data?.coverImage}
                            className="img-fluid"
                            alt="Product"
                            style={imageContainerImg}
                        />
                    </div>
                    <h6 className="product-title">{data?.productTitle}</h6>
                    <p className="product-price fs-5 mb-1"><span>₹{Number(data?.price).toFixed(2)}</span></p>

                    <div className="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                        {
                            (permissionCheckResult?.Edit || permissionCheckResult?.All) &&
                            <Link
                                to="#"
                                className="btn btn-sm btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#updateProductModal"
                                onClick={() => dispatch(getProductRequest({ productId: data?._id }))}
                            ><i className="bi bi-pencil-fill"></i>Edit
                            </Link>
                        }
                        {
                            (permissionCheckResult?.Delete || permissionCheckResult?.All) &&
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
                            (permissionCheckResult?.Read || permissionCheckResult?.All) &&
                            <Link
                                to="#"
                                className="btn btn-sm btn-outline-info"
                                data-bs-toggle="modal"
                                data-bs-target="#productDetails"
                                onClick={() => dispatch(getProductRequest({ productId: data?._id }))}
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