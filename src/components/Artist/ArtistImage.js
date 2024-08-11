import React from 'react';
import { urlFor } from '../../client'; // Ensure this path correctly leads to your Sanity client configuration

const ArtistImage = ({ image }) => {
  // Check if 'image' prop is provided and is valid
  if (!image) return null;

  // Construct the image URL using the urlFor function
  const imageUrl = urlFor(image).url();
  
  // Optionally, handle the case where imageUrl might be undefined or null
  if (!imageUrl) return <p>No image found.</p>;

  // Render the image with the constructed URL
  return (
    <img src={imageUrl} alt="Artist" className="artistImage" />
  );
};

export default ArtistImage;
