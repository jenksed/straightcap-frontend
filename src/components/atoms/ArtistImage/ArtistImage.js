import React from 'react';
import './ArtistImage.css'; // Ensure you have the CSS for styling

const ArtistImage = ({ image }) => {
    return (
        <img
            src={image} // Ensure the image prop is being used here
            alt="Artist"
            className="artistImage" // Add a class for styling
        />
    );
};

export default ArtistImage;
