import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate: any = useNavigate();

    return (
        <>
            {/* <!--start content--> */}
            <main className="page-content">
                {/* <!--breadcrumb--> */}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Product & Category</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
                                </li>
                                <li
                                    className="breadcrumb-item"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate('/products')}
                                >Products</li>
                                <li className="breadcrumb-item active" aria-current="page">Add New Product</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!--end breadcrumb--> */}

                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="card">
                            <div className="card-header py-3 bg-transparent">
                                <div className="d-sm-flex align-items-center">
                                    <h5 className="mb-2 mb-sm-0">Add New Product</h5>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-12 col-lg-8">
                                        <div className="card shadow-none bg-light border">
                                            <div className="card-body">
                                                <form className="row g-3">
                                                    <div className="col-12">
                                                        <label className="form-label">Product title</label>
                                                        <input type="text" className="form-control" placeholder="Product title" />
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <label className="form-label">Offer</label>
                                                        <select className="form-select">
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <label className="form-label">Offer Percentage</label>
                                                        <input type="text" className="form-control" placeholder="Percentage" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label">Product Images</label>
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label">Product description</label>
                                                        <textarea className="form-control" placeholder="Full description" rows={4} cols={4}></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <div className="card shadow-none bg-light border">
                                            <div className="card-body">
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label className="form-label">Price</label>
                                                        <input type="text" className="form-control" placeholder="Price" />
                                                    </div>

                                                    <div className="col-12">
                                                        <label className="form-label">Availability</label>
                                                        <select className="form-select">
                                                            <option>Available</option>
                                                            <option>Unavailable</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12">
                                                        <label className="form-label">Product Visibility</label>
                                                        <select className="form-select">
                                                            <option>Show</option>
                                                            <option>Hide</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-12">
                                                        <h5>Categories</h5>
                                                        <div className="category-list">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="AppetizersStarters" />
                                                                <label className="form-check-label" htmlFor="AppetizersStarters">
                                                                    Appetizers or Starters
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="SoupsAndSalads" />
                                                                <label className="form-check-label" htmlFor="SoupsAndSalads">
                                                                    Soups and Salads
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="TandooriDishes" />
                                                                <label className="form-check-label" htmlFor="TandooriDishes">
                                                                    Tandoori Dishes
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="VegetarianEntrees" />
                                                                <label className="form-check-label" htmlFor="VegetarianEntrees">
                                                                    Vegetarian Entrees
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="NonVegetarianEntrees" />
                                                                <label className="form-check-label" htmlFor="NonVegetarianEntrees">
                                                                    Non-Vegetarian Entrees
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="SeafoodSpecialties" />
                                                                <label className="form-check-label" htmlFor="SeafoodSpecialties">
                                                                    Seafood Specialties
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="BiryaniAndRice" />
                                                                <label className="form-check-label" htmlFor="BiryaniAndRice">
                                                                    Biryani and Rice
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="Breads" />
                                                                <label className="form-check-label" htmlFor="Breads">
                                                                    Breads
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="SideDishes" />
                                                                <label className="form-check-label" htmlFor="SideDishes">
                                                                    Side Dishes
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="Desserts" />
                                                                <label className="form-check-label" htmlFor="Desserts">
                                                                    Desserts
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="Beverages" />
                                                                <label className="form-check-label" htmlFor="Beverages">
                                                                    Beverages
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--end row--> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <!--end row--> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end row--> */}
            </main>
        </>
    );
};

export default AddProduct;