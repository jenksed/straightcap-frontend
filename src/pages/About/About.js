import React from 'react';
import Layout from '../../components/Layout/Layout'; // Ensure the path is correct
import './About.css'; // Import the CSS file

const About = () => {
    return (
        <Layout>
            <div className="aboutContainer">
                <h1 className="aboutHeader">About StraightCap</h1>
                <p className="aboutText">
                    StraightCap is a dynamic platform dedicated to showcasing the vibrant world of Lansing rappers. Our mission is to bring local talents to a broader audience, celebrating the rich musical heritage and contemporary creativity found within Lansing's music scene.
                </p>
                <p className="aboutText">
                    This platform serves as a hub for discovering local artists, exploring their music, and connecting with the heart of Lansing's artistic community. From established artists to emerging talents, StraightCap is your gateway to the beats and rhymes that define our city's unique sound.
                </p>
                <p className="aboutText">
                    Whether you're a fan, a fellow artist, or just exploring, StraightCap offers insights, stories, and, of course, fantastic music. Join us in celebrating the artistry that Lansing has to offer.
                </p>
            </div>
        </Layout>
    );
};

export default About;
