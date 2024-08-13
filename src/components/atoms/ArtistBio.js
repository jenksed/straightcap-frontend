import React from 'react';
import CustomPortableText from '../CustomPortableText';  // Assuming you created this wrapper

const ArtistBio = ({ bio = [] }) => {
  return (
    <div className="artistBio">
      <CustomPortableText blocks={bio} projectId="your-project-id" dataset="your-dataset-name" />
    </div>
  );
};

export default ArtistBio;
