import React from 'react';
import { Link } from 'react-router-dom';
import client, { urlFor } from '../../../client';
import './ArtistGrid.css';

function ArtistGrid({ filteredArtists = [] }) {
    return (
        <div className="artistsContainer"> {/* Use artistsContainer for grid layout */}
            {filteredArtists.map((artist) => (
                <Link 
                    to={`/artists/${artist.slug.current}`} 
                    key={artist._id} 
                    className="rapperCard"
                    style={{ backgroundImage: artist.image ? `url(${urlFor(artist.image).url()})` : 'none' }}
                >
                    <h2 className="rapperName">{artist.name}</h2>
                </Link>
            ))}
        </div>
    );
}

export default ArtistGrid;
