import React from 'react';

// Using a more structured approach to map platforms to readable names
const platformToName = {
  "spotify.com": "Spotify",
  "soundcloud.com": "SoundCloud",
  "apple.com": "Apple Music",
  "youtube.com": "YouTube"
};

// Function to get the platform name based on the URL
const getPlatformName = (url) => {
  return Object.keys(platformToName).find(domain => url.includes(domain)) || "Other";
};

const MusicLinks = React.memo(({ links }) => {
  console.log("Links received:", links);

  if (!Array.isArray(links) || links.length === 0) {
    console.log("No valid links provided.");
    return <div className="musicLinks">No music links available.</div>;
  }

  return (
    <div className="musicLinks">
      {links.map((link, index) => (
        <a key={link.url || index} href={link.url} target="_blank" rel="noopener noreferrer" className="musicLink">
          {platformToName[getPlatformName(link.url)] || 'Unknown Platform'}
        </a>
      ))}
    </div>
  );
});

export default MusicLinks;
