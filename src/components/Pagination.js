import React from 'react';

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      className="container fixed-bottom d-flex align-items-end justify-content-end"
      style={{
        position: 'fixed',
        zIndex: '99',
        transform: 'translateY(-9px) ',
      }}
    >
      <ul className="pagination ">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a
              onClick={() => paginate(pageNumber)}
              href="!#"
              className="page-link"
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
