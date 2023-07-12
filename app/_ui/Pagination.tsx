type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum number of visible page buttons

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`cursor-pointer bg-white text-gray-800 font-semibold py-2 px-4 rounded-md ${
            i === currentPage ? "bg-gray-200" : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination flex justify-center items-center space-x-2 mt-4">
      <li
        className={`cursor-pointer bg-white text-gray-800 font-semibold py-2 px-4 rounded-md ${
          currentPage === 1 ? "bg-gray-200" : "hover:bg-gray-200"
        }`}
        onClick={handleFirstPage}
      >
        <span>&laquo;</span> First
      </li>
      <li
        className={`cursor-pointer bg-white text-gray-800 font-semibold py-2 px-4 rounded-md ${
          currentPage === 1 ? "bg-gray-200" : "hover:bg-gray-200"
        }`}
        onClick={handlePreviousPage}
      >
        <span>&lsaquo;</span> Prev
      </li>
      {renderPageNumbers()}
      <li
        className={`cursor-pointer bg-white text-gray-800 font-semibold py-2 px-4 rounded-md ${
          currentPage === totalPages ? "bg-gray-200" : "hover:bg-gray-200"
        }`}
        onClick={handleNextPage}
      >
        Next <span>&rsaquo;</span>
      </li>
      <li
        className={`cursor-pointer bg-white text-gray-800 font-semibold py-2 px-4 rounded-md ${
          currentPage === totalPages ? "bg-gray-200" : "hover:bg-gray-200"
        }`}
        onClick={handleLastPage}
      >
        Last <span>&raquo;</span>
      </li>
    </ul>
  );
}
