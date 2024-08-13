import React from 'react';
import './Header.css'; 
import NavBar from '../NavBar/NavBar';
import Logo from '../../Layout/Logo/Logo';
import SocialIcons from '../../Layout/SocialIcons/SocialIcons';
import AuthLinks from '../../Layout/AuthLinks/AuthLinks';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-content">
                <Logo />
                <div className="header-right">
                    <SocialIcons />
                    <AuthLinks />
                </div>
            </div>
            <NavBar />
        </header>
    );
};

export default Header;
