import { PermissionCheckResult } from '../../../config/DataTypes.config';
import Pagination from '../../Pagination';
import Category from './Category';
import { CategoryData } from '../../../types/categoryTypes';

type categoryList_props = {
    newData: Array<CategoryData> | undefined,
    pageCount: number,
    pageNumber: number,
    changePage: (data: { selected: number }) => void,
    setCategoryID: (id: string) => void,
    permissionCheckResult: PermissionCheckResult,
}

const CategoryList = ({ newData, pageCount, pageNumber, changePage, setCategoryID, permissionCheckResult }: categoryList_props): JSX.Element => {

    return (
        <>
            <div className="col-12 col-lg-8 d-flex">
                <div className="card border shadow-none w-100">
                    <div className="card-body">

                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Category ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newData?.map((item, index) => (
                                        <Category
                                            index={index}
                                            key={item?._id}
                                            data={item}
                                            setCategoryID={setCategoryID}
                                            permissionCheckResult={permissionCheckResult}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <nav className="float-end mt-0" aria-label="Page navigation">
                            <Pagination
                                pageNumber={pageNumber}
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
