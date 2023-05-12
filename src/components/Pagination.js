import "../style/Products.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxDisplayedButtons = 2;
  const halfDisplayedButtons = Math.floor(maxDisplayedButtons / 2);

  const startPage =
    currentPage <= halfDisplayedButtons
      ? 1
      : Math.max(1, currentPage - halfDisplayedButtons);
  const endPage = Math.min(
    startPage + maxDisplayedButtons - 1,
    pageNumbers.length
  );

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav className="pagination">
      <a
        className={`pagination-buttons ${
          currentPage === 1 ? "pagination-disabled" : ""
        }`}
        onClick={onPreviousPage}
      >
        {"<"}
      </a>

      <ul className="pagination-numbers">
        {startPage > 1 && (
          <li>
            <a className="pagination-buttons" onClick={() => onSpecificPage(1)}>
              1
            </a>
          </li>
        )}
        {startPage > 2 && <li className="pagination-buttons">...</li>}
        {pageNumbers.slice(startPage - 1, endPage).map((noPage) => (
          <li key={noPage}>
            <a
              className={`pagination-buttons ${
                noPage === currentPage ? "pagination-active" : ""
              }`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
        {endPage < pageNumbers.length - 1 && <li className="pagination-buttons">...</li>}
        {endPage < pageNumbers.length && (
          <li>
            <a
              className="pagination-buttons"
              onClick={() => onSpecificPage(pageNumbers.length)}
            >
              {pageNumbers.length}
            </a>
          </li>
        )}
      </ul>
      <a
        className={`pagination-buttons ${
          currentPage >= pageNumbers.length ? "pagination-disabled" : ""
        }`}
        onClick={onNextPage}
      >
        {">"}
      </a>
    </nav>
  );
};

export default Pagination;
