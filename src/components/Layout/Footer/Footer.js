import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '10px 20px', textAlign: 'center', marginTop: '20px' }}>
            <p>Copyright © {(new Date()).getFullYear()} StraightCap</p>
        </footer>
    );
};

export default Footer;
