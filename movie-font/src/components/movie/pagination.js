import "bootstrap/dist/css/bootstrap.min.css";
import { PaginationControl } from "react-bootstrap-pagination-control";

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
