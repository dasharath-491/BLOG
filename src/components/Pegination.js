import React from "react";

const Pagination = ({ postsPerPage, totaluserIds, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totaluserIds / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href={number.id}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
