import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    // <div>

    // </div>
    <div className='flex items-center justify-center mt-8'>
      <nav className='relative z-0 inline-flex shadow-sm'>
        <ul className='flex items-center'>
          {currentPage > 1 ? (
            <a
              onClick={() => paginate(currentPage - 1)}
              href='#'
              className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
            >
              Previous
            </a>
          ):
          (
            <span className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-white cursor-not-allowed'>
              Previous
            </span>
          )}
          {pageNumbers.map((number) => (
            <li key={number} className="mb-0">
              <a
                onClick={() => paginate(number)}
                href='#'
                className={`${
                  number === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl`}
              >
                {number}
              </a>
            </li>
          ))}
          {currentPage < pageNumbers.length ? (
            <a
              onClick={() => paginate(currentPage + 1)}
              href='#'
              className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
            >
              Next
            </a>
          ) : (
            <span className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-white cursor-not-allowed'>
              Next
            </span>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
