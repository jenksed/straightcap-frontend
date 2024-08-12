// src/pages/Artists/Artists.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client, { urlFor } from '../../client'; 
import Layout from '../../components/Layout/Layout'; 
import Pagination from '../../components/Layout/Pagination/Pagination'; 
import ArtistGrid from '../../components/Artists/ArtistGrid/ArtistGrid'; 
import Toolbar from '../../components/Artists/Toolbar/Toolbar'; 
import './Artists.css'; 

function Artists() {
    const [artists, setArtists] = useState([]); // State for artists
    const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
    const itemsPerPage = 15; // Items per page
    const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering

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

    // Filter artists based on search term
    const filteredArtists = artists.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="artistsPage">
                {/* Toolbar for pagination and search */}
                <Toolbar 
                    currentPage={currentPage} 
                    totalPages={Math.ceil(filteredArtists.length / itemsPerPage)} 
                    paginate={setCurrentPage} 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                />

                {/* Use the ArtistGrid component to display filtered artists */}
                <ArtistGrid filteredArtists={filteredArtists.slice(indexOfFirstArtist, indexOfLastArtist)} />
            </div>
        </Layout>
    );
}

export default Artists;
