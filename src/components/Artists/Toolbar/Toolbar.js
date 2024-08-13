// Toolbar.js
import React from 'react';
import Pagination from '../../Layout/Pagination/Pagination';
import './Toolbar.css';

const Toolbar = ({ currentPage, totalPages, paginate, searchTerm, setSearchTerm, setSelectedLetter }) => {

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        paginate(1); 
    };

    const handleLetterClick = (letter) => {
        setSearchTerm(''); // Clear search term when selecting a letter
        setSelectedLetter(letter); // Update the selected letter
        paginate(1); // Reset to first page
    };

    const letters = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65)); // A-Z

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
            <div className="letterMatrix">
                {letters.map(letter => (
                    <button
                        key={letter}
                        className="letterButton"
                        onClick={() => handleLetterClick(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Toolbar;
