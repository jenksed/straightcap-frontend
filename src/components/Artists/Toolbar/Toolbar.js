// Toolbar.js
import React from 'react';
import Pagination from '../../Layout/Pagination/Pagination';
import './Toolbar.css';

const Toolbar = ({ currentPage, totalPages, paginate, searchTerm, setSearchTerm }) => {

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        paginate(1); 
    };

    return (
        <div className="toolbar">
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                paginate={paginate} 
            />
            <div className="searchBox">
                <input
                    type="text"
                    placeholder="Search artists..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
};

export default Toolbar;