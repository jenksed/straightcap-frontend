// src/pages/Artists/Artists.js
import React, { useEffect, useState } from 'react';
import client from '../../client'; 
import Layout from '../../components/Layout/Layout'; 
import ArtistGrid from '../../components/organisms/ArtistGrid/ArtistGrid'; 
import Toolbar from '../../components/organisms/Toolbar/Toolbar'; 
import './Artists.css'; 

const ITEMS_PER_PAGE = 15; // Constant for items per page

function Artists() {
    const [artists, setArtists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLetter, setSelectedLetter] = useState("");

    useEffect(() => {
        client.fetch(`*[_type == "artist"]{ _id, name, slug, image }`)
            .then(setArtists)
            .catch(console.error);
    }, []);

    const indexOfLastArtist = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstArtist = indexOfLastArtist - ITEMS_PER_PAGE;

    const filteredArtists = artists.filter(artist => {
        const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLetter = selectedLetter ? artist.name.startsWith(selectedLetter) : true;
        return matchesSearch && matchesLetter;
    });

    return (
        <Layout>
            <div className="artistsPage">
                <Toolbar 
                    currentPage={currentPage} 
                    totalPages={Math.ceil(filteredArtists.length / ITEMS_PER_PAGE)} 
                    paginate={setCurrentPage} 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    setSelectedLetter={setSelectedLetter} 
                />
                <ArtistGrid filteredArtists={filteredArtists.slice(indexOfFirstArtist, indexOfLastArtist)} />
            </div>
        </Layout>
    );
}

export default Artists;
