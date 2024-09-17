import { Link } from 'react-router-dom';
import { PermissionCheckResult } from '../../../config/DataTypes.config';
import { CategoryData } from '../../../types/categoryTypes';

type DataList_Props = {
    data: CategoryData,
    setCategoryID: (id: string) => void,
    index: number,
    permissionCheckResult: PermissionCheckResult
}

const Category = ({ data, index, setCategoryID, permissionCheckResult }: DataList_Props): JSX.Element => {
    return (
        <tr>
            <td>{data?.categoryID}</td>
            <td>{data?.categoryName}</td>
            <td>{data?.categoryDesc ? data?.categoryDesc : "N/A"}</td>
            <td>
                <div className="d-flex align-items-center gap-3 fs-6">
                    {
                        (permissionCheckResult?.Write || permissionCheckResult?.All) &&
                        <Link to="#" className="text-warning" data-bs-toggle="modal" data-bs-target="#updateCategoryModal" onClick={() => setCategoryID(data._id)}>
                            <i className="bi bi-pencil-fill"></i>
                        </Link>
                    }

                    {
                        (permissionCheckResult?.Delete || permissionCheckResult?.All) &&
                        <Link to="#" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setCategoryID(data._id)}>
                            <i className="bi bi-trash-fill"></i>
                        </Link>
                    }
                </div>
            </td>
        </tr>
    );
};

export default Category;