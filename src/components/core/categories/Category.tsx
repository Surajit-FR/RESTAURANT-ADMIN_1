import { Link } from 'react-router-dom';
import { CategoryListType } from '../../../config/DataTypes.config';

type DataList_Props = {
    data: CategoryListType,
    setCategoryID: (id: string) => void,
    index: number
}

const Category = ({ data, index, setCategoryID }: DataList_Props): JSX.Element => {
    return (
        <tr>
            <td>{data?.categoryID}</td>
            <td>{data?.category_name}</td>
            <td>{data?.category_desc ? data?.category_desc : "N/A"}</td>
            <td>
                <div className="d-flex align-items-center gap-3 fs-6">
                    <Link to="#" className="text-warning" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" title="Edit info"
                        aria-label="Edit">
                        <i className="bi bi-pencil-fill"></i>
                    </Link>

                    <Link to="#" className="text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setCategoryID(data._id)}>
                        <i className="bi bi-trash-fill"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default Category;