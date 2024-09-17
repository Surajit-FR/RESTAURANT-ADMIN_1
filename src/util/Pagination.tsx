import ReactPaginate from "react-paginate";
import { Pagination_PropsType } from "../types/common";

const Pagination = ({ pageCount, pageNumber, changePage }: Pagination_PropsType): JSX.Element => {
    return (
        <>
            <ul className="pagination">
                <ReactPaginate
                    breakLabel=''
                    previousLabel="Preview"
                    // previousLabel={<i className="fadeIn animated bx bx-caret-left"></i>}
                    nextLabel="Next"
                    // nextLabel={<i className="fadeIn animated bx bx-caret-right"></i>}
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
                    forcePage={pageNumber}
                    renderOnZeroPageCount={null}
                />
            </ul>
        </>
    );
};

export default Pagination;