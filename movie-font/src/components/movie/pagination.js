import "bootstrap/dist/css/bootstrap.min.css";
import { PaginationControl } from "react-bootstrap-pagination-control";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}
function Pagin({ page, setPage, tatalPage }) {
  return (
    <>
      <PaginationControl
        page={page}
        between={4}
        total={tatalPage}
        limit={20}
        changePage={(page) => {
          setPage(page);
          console.log(page);
        }}
        ellipsis={1}
      />
    </>
  );
}
export default Pagin;

// function Pagin(currentItems) {
//   return (
//     <>
//       <Items currentItems={currentItems} />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         // onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={10}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }
