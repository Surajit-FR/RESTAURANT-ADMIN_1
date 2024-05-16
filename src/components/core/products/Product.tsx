import { Link } from "react-router-dom";

const Product = (): JSX.Element => {
    return (
        <>
            <div className="col">
                <div className="card border shadow-none mb-0">
                    <div className="card-body text-center">
                        <img src="/assets/images/products/01.png" className="img-fluid mb-3" alt="" />
                        <h6 className="product-title">Men White Polo T-shirt</h6>
                        <p className="product-price fs-5 mb-1"><span>$250.99</span></p>

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