// src/pages/ArtistPage/ArtistPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../../client';
import Layout from '../../components/Layout/Layout';
import ArtistPageTemplate from '../../components/templates/ArtistPageTemplate/ArtistPageTemplate'; 

function ArtistPage() {
  const { slug } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if (!slug) return; // Early return if slug is undefined
  
    client.fetch(`*[_type == "artist" && slug.current == $slug][0]{
      _id,
      name,
      image,
      bio,
      musicLinks,
      blogLinks
    }`, { slug })
      .then(setArtist)
      .catch(console.error);
  }, [slug]);
  

  if (!artist) {
    return <div>Loading...</div>; // Or a proper loading indicator
  }

  return (
    <Layout>
      <ArtistPageTemplate artist={artist} />
    </Layout>
  );
}

export default ArtistPage;
