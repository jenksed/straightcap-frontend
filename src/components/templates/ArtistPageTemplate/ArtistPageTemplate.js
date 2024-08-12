// src/components/templates/ArtistPageTemplate.js
import React from 'react';
import ArtistBio from '../../Artist/ArtistBio'; // Assuming you've made these components more generic
import ArtistImage from '../../Artist/ArtistImage';
import MusicLinks from '../../Artist/MusicLinks';
import BlogLinks from '../../Artist/BlogLinks';
import './ArtistPageTemplate.css'; // Create this CSS file for styling

const ArtistPageTemplate = ({ artist }) => {
  if (!artist) {
    return <div>Loading...</div>; // Fallback in case artist data is not available
  }

  return (
    <div className="artistPageTemplate">
      <div className="artistHeader">
        <ArtistImage image={artist.image} />
        <h2>{artist.name}</h2>
      </div>
      <div className="artistContent">
        {artist.bio && <ArtistBio bio={artist.bio} />}
        {artist.musicLinks && <MusicLinks links={artist.musicLinks} />}
        {artist.blogLinks && <BlogLinks links={artist.blogLinks} />}
      </div>
    </div>
  );
};


export default ArtistPageTemplate;
