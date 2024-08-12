import React from 'react';
import './Header.css'; 
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';
import AuthLinks from '../AuthLinks/AuthLinks';

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
