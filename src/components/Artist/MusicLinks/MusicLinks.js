import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faSoundcloud, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './MusicLinks.css'; // Import the CSS file

// Using a more structured approach to map platforms to readable names and icons
const platformToDetails = {
  "spotify.com": { name: "Spotify", icon: faSpotify },
  "soundcloud.com": { name: "SoundCloud", icon: faSoundcloud },
  "apple.com": { name: "Apple Music", icon: faApple },
  "youtube.com": { name: "YouTube", icon: faYoutube }
};

// Function to get the platform details based on the URL
const getPlatformDetails = (url) => {
  return Object.keys(platformToDetails).find(domain => url.includes(domain)) || "Other";
};

const MusicLinks = React.memo(({ links }) => {
  console.log("Links received:", links);

  if (!Array.isArray(links) || links.length === 0) {
    console.log("No valid links provided.");
    return <div className="musicLinks">No music links available.</div>;
  }

  return (
    <div className="musicLinks">
      {links.map((link, index) => {
        const platform = getPlatformDetails(link.url);
        const platformDetails = platformToDetails[platform];

        return (
          <a
            key={link.url || index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="musicLink"
          >
            {platformDetails ? (
              <>
                <FontAwesomeIcon icon={platformDetails.icon} className="musicIcon" />
                {platformDetails.name}
              </>
            ) : (
              <span>Unknown Platform</span>
            )}
          </a>
        );
      })}
    </div>
  );
});

export default MusicLinks;
