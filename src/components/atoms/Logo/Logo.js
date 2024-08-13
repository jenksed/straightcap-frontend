import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logoImage from '../../../assets/img/straightcap-logo.png'; // Adjust the path to your logo image

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logoImage} alt="Logo" /> {/* Use img tag for the logo */}
            </Link>
        </div>
    );
};

export default Logo;
