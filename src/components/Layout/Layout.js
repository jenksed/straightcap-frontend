// Layout Component
import React from 'react';
import Header from '../organisms/Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
