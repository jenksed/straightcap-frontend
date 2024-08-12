// src/components/atoms/ArtistImage.js
import React from 'react';
import { urlFor } from '../../../client'; // Adjust import path if necessary

const ArtistImage = ({ image }) => {
    const imageUrl = image ? urlFor(image).url() : 'none'; // Handle missing images gracefully

    return (
        <div 
            className="artistImage" 
            style={{ backgroundImage: `url(${imageUrl})` }} 
        />
    );
};

export default ArtistImage;
