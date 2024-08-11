import React, { useEffect, useState } from 'react';
import client from '../../client'; // Adjust the import path as needed
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
    if (!source) {
        // Return undefined or a default image URL if no source is available
        return undefined;
    }
    return builder.image(source);
}

const RandomRappers = () => {
    const [rappers, setRappers] = useState([]);

    useEffect(() => {
        const query = '*[_type == "rapper"][0...50]'; // Fetch up to 50 rappers
        client.fetch(query)
            .then(data => {
                setRappers(shuffleArray(data).slice(0, 5)); // Shuffle and pick the first 5
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
        <div>
            <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>Featured Artists</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {rappers.map(rapper => (
                    <div key={rapper._id} style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '8px',
                        background: `url(${urlFor(rapper.image)?.url() || 'path/to/default/image.jpg'}) center/cover`,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1em',
                        padding: '10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'black', // Fallback or overlay color
                        backgroundBlendMode: 'darken'
                    }}>
                        <h4 style={{ textAlign: 'center', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>{rapper.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomRappers;
