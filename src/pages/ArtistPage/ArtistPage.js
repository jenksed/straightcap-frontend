import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../client';
import Layout from '../../components/Layout/Layout';
import ArtistBio from '../../components/Artist/ArtistBio';
import ArtistImage from '../../components/Artist/ArtistImage';
import MusicLinks from '../../components/Artist/MusicLinks';
import './ArtistPage.css';

function ArtistPage() {
  const { artistSlug } = useParams();
  const [artist, setArtist] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const query = `*[_type == "artist" && slug.current == $artistSlug][0]{
      name,
      bio,
      image,
      musicLinks
    }`;

    // Ensure you provide the parameter here in the second argument of client.fetch
    client.fetch(query, { artistSlug })
      .then(data => {
        setArtist(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch artist data:", err);
        setError(err);
        setLoading(false);
      });
  }, [artistSlug]); // This ensures the useEffect runs again if artistSlug changes

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading artist.</div>;
  if (!artist) return <div>Artist not found.</div>;

  return (
    <Layout>
      <div className="artistPageContainer">
        <h1 className="artistHeader">{artist?.name}</h1>
        <ArtistImage image={artist?.image} />
        <ArtistBio bio={artist?.bio} />
        <div className="musicSection">
          <h2>Listen to {artist?.name}</h2>
          <MusicLinks links={artist?.musicLinks || []} />
        </div>
      </div>
    </Layout>
  );
}

export default ArtistPage;
