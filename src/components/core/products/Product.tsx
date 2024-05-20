import { Link } from "react-router-dom";
import { ProductListType } from "../../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../../config/App.config";

type DataList_Props = {
    data: ProductListType,
}

const Product = ({ data }: DataList_Props): JSX.Element => {
    return (
        <>
            <div className="col">
                <div className="card border shadow-none mb-0">
                    <div className="card-body text-center">
                        <img
                            src={`${REACT_APP_BASE_URL}/${data?.productImage}`}
                            className="img-fluid mb-3"
                            alt="Product"
                            style={{ height: "120px", width: "240px" }}
                        />
                        <h6 className="product-title">{data?.productTitle}</h6>
                        <p className="product-price fs-5 mb-1"><span>₹{Number(data?.price).toFixed(2)}</span></p>

                        <div className="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                            <Link to="#" className="btn btn-sm btn-outline-primary"><i className="bi bi-pencil-fill"></i>
                                Edit</Link>
                            <Link to="#" className="btn btn-sm btn-outline-danger"><i className="bi bi-trash-fill"></i>
                                Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;