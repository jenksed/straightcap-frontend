// RegistrationPage.js
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/shared/Modal';

const RegistrationPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Initialize Google authentication on component mount
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
            });
        });
    }, []);

    const handleGoogleRegister = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signIn().then(googleUser => {
            const id_token = googleUser.getAuthResponse().id_token;
            console.log('Google ID Token:', id_token);
            alert('Google Registration successful!');
            // Optional: Send the token to your backend here for registration/logic
        }).catch(error => {
            console.error('Google registration failed:', error);
            alert('Ensure pop-ups are not blocked and try again.');
        });
    };

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <h1>Register</h1>
                <button onClick={() => setModalOpen(true)}>Register with Google</button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Please register with your Google account:"
                    onAction={handleGoogleRegister}
                    actionLabel="Sign in with Google"
                />
            </div>
        </Layout>
    );
};

export default RegistrationPage;
