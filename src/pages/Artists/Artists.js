import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client, { urlFor } from '../../client'; // Adjust the import path as necessary
import Layout from '../../components/Layout/Layout'; // Ensure Layout is imported
import './Artists.css'; // Import the CSS file for styling

function Artists() {
    const [rappers, setRappers] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "rapper"]{
            _id,
            name,
            slug,
            image
        }`)
        .then((data) => {
            setRappers(data);
        })
        .catch(console.error);
    }, []);

    return (
        <Layout>
            <div className="artistsContainer">
                {rappers.map((rapper) => (
                    <Link to={`/artists/${rapper.slug.current}`} key={rapper._id} className="rapperCard"
                        style={{ backgroundImage: rapper.image ? `url(${urlFor(rapper.image).url()})` : 'none' }}>
                        <h2 className="rapperName">{rapper.name}</h2>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default Artists;
