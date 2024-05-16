import { CategoryListType } from '../../../config/DataTypes.config';
import Pagination from '../../../util/Pagination';
import Category from './Category';

type categoryList_props = {
    newData: Array<CategoryListType> | undefined,
    pageCount: number,
    changePage: (data: { selected: number }) => void,
}

const CategoryList = ({ newData, pageCount, changePage }: categoryList_props): JSX.Element => {

    return (
        <>
            <div className="col-12 col-lg-8 d-flex">
                <div className="card border shadow-none w-100">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* Category */}
                                    {
                                        newData?.map((item) => {
                                            return (

                                                <Category
                                                    key={item?._id}
                                                    data={item}
                                                />
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <nav className="float-end mt-0" aria-label="Page navigation">
                            <Pagination
                                pageCount={pageCount}
                                changePage={changePage}
                            />
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryList;