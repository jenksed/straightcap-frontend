import React from 'react';
import ArtistBio from '../../atoms/ArtistBio';
import ArtistImage from '../../Artist/ArtistImage';
import MusicLinks from '../../molecules/MusicLinks/MusicLinks';
import BlogLinks from '../../molecules/BlogLinks/BlogLinks';
import './ArtistPageTemplate.css'; 

const ArtistPageTemplate = ({ artist }) => {
  if (!artist) {
    return <div>Loading...</div>; // Fallback for loading state
  }

  return (
    <div className="artistPageTemplate">
      <div className="artistHeader">
        <ArtistImage image={artist.image} />
        <div className="artistInfo">
          <h2>{artist.name}</h2>
          {artist.bio && <ArtistBio bio={artist.bio} />}
        </div>
      </div>
      <div className="musicLinks">
        {artist.musicLinks && <MusicLinks links={artist.musicLinks} />}
      </div>
      <div className="blogLinks">
        {artist.blogLinks && <BlogLinks links={artist.blogLinks} />}
      </div>
    </div>
  );
};

export default ArtistPageTemplate;
