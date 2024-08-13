// LoginPage.js
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/shared/Modal';

const LoginPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
            });
        });
    }, []);

    const handleGoogleLogin = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signIn().then(googleUser => {
            const id_token = googleUser.getAuthResponse().id_token;
            console.log('Google ID Token:', id_token);
            // Handle the token as needed
        }).catch(error => {
            console.error('Google login failed:', error);
        });
    };

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <button onClick={() => setModalOpen(true)}>Login with Google</button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Please login with your Google account:"
                    onAction={handleGoogleLogin}
                    actionLabel="Sign in with Google"
                />
            </div>
        </Layout>
    );
};

export default LoginPage;
