import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../../client';
import imageUrlBuilder from '@sanity/image-url';
import './RandomRappers.css';

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return source ? builder.image(source).url() : undefined;
}

const RandomRappers = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const query = '*[_type == "artist"][0...50]';
        client.fetch(query)
            .then(data => {
                setArtists(shuffleArray(data).slice(0, 9)); // Fetch 9 artists
            })
            .catch(err => console.error(err));
    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div className="randomRappersContainer">
            <h2 className="randomRappersTitle">Featured Artists</h2>
            <div className="randomRappersGrid">
                {artists.map(artist => (
                    <Link
                        to={`/artists/${artist.slug.current}`}
                        key={artist._id}
                        className="artistCard"
                        style={{
                            backgroundImage: artist.image ? `url(${urlFor(artist.image)})` : 'none',
                        }}
                    >
                        <h4 className="artistName">{artist.name}</h4>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RandomRappers;
