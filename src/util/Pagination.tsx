import ReactPaginate from "react-paginate";
import { Pagination_Type } from "../config/DataTypes.config";

const Pagination = ({ pageCount, changePage }: Pagination_Type): JSX.Element => {
    return (
        <>
            <ul className="pagination">
                <ReactPaginate
                    breakLabel=''
                    previousLabel={<i className="fadeIn animated bx bx-caret-left"></i>}
                    nextLabel={<i className="fadeIn animated bx bx-caret-right"></i>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                    renderOnZeroPageCount={null}
                />
            </ul>
        </>
    );
};

export default Pagination;