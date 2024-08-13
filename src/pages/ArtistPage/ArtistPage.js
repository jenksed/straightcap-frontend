// src/pages/ArtistPage/ArtistPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../client';
import Layout from '../../components/Layout/Layout';
import ArtistPageTemplate from '../../components/templates/ArtistPageTemplate/ArtistPageTemplate';
import ErrorBoundary from '../../components/ErrorBoundary'; // Add error handling

function ArtistPage() {
  const { slug } = useParams();
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    if (!slug) return;

    setIsLoading(true); // Set loading state to true before fetching

    client.fetch(`*[_type == "artist" && slug.current == $slug][0]{
      _id,
      name,
      image,
      bio,
      musicLinks,
      blogLinks
    }`, { slug })
      .then(data => {
        setArtist(data);
        setIsLoading(false); // Set loading state to false after successful fetch
      })
      .catch(error => {
        console.error(error);
        setError(error); // Set error state if fetching fails
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a more visually appealing loading indicator
  }

  if (error) {
    return (
      <ErrorBoundary>
        <div>Error: {error.message}</div> 
      </ErrorBoundary>
    );
  }

  if (!artist) {
    return <div>Artist not found</div>; // Handle case where artist is not found
  }

  return (
    <Layout>
      <ArtistPageTemplate artist={artist} />
    </Layout>
  );
}

export default ArtistPage;
