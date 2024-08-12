// src/components/organisms/ArtistCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import ArtistImage from '../../atoms/ArtistImage/ArtistImage';
import ArtistName from '../../atoms/ArtistName/ArtistName';
import './ArtistCard.css';

function ArtistCard({ artist }) {
    return (
        <Link to={`/artists/${artist.slug.current}`} key={artist._id} className="rapperCard">
            <ArtistImage image={artist.image} />
            <ArtistName name={artist.name} />
        </Link>
    );
}

export default ArtistCard;
