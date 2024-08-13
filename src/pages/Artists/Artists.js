// src/pages/Artists/Artists.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../client'; 
import Layout from '../../components/Layout/Layout'; 
import ArtistGrid from '../../components/Artists/ArtistGrid/ArtistGrid'; 
import Toolbar from '../../components/Artists/Toolbar/Toolbar'; 
import './Artists.css'; 

function Artists() {
    const [artists, setArtists] = useState([]); // State for artists
    const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
    const itemsPerPage = 15; // Items per page
    const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
    const [selectedLetter, setSelectedLetter] = useState(""); // State for selected letter

    useEffect(() => {
        // Fetching artists data from the client
        client.fetch(`*[_type == "artist"]{
            _id,
            name,
            slug,
            image
        }`)
        .then((data) => {
            setArtists(data); // Set fetched artists data to state
        })
        .catch(console.error);
    }, []);

    const indexOfLastArtist = currentPage * itemsPerPage; // Index of last artist on current page
    const indexOfFirstArtist = indexOfLastArtist - itemsPerPage; // Index of first artist on current page

    // Filter artists based on search term and selected letter
    const filteredArtists = artists.filter(artist => {
        const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLetter = selectedLetter ? artist.name.startsWith(selectedLetter) : true;
        return matchesSearch && matchesLetter;
    });

    return (
        <Layout>
            <div className="artistsPage">
                {/* Toolbar for pagination, search, and letter selection */}
                <Toolbar 
                    currentPage={currentPage} 
                    totalPages={Math.ceil(filteredArtists.length / itemsPerPage)} 
                    paginate={setCurrentPage} 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    setSelectedLetter={setSelectedLetter} // Pass down setSelectedLetter
                />

                {/* Use the ArtistGrid component to display filtered artists */}
                <ArtistGrid filteredArtists={filteredArtists.slice(indexOfFirstArtist, indexOfLastArtist)} />
            </div>
        </Layout>
    );
}

export default Artists;
