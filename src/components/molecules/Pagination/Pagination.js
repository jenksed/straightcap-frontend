import React from 'react';
import './Pagination.css'; // Import your CSS for styling

const Pagination = ({ currentPage, totalPages, paginate }) => {
    return (
        <div className="paginationControls">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
