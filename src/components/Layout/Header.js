import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header style={{
            backgroundColor: '#f8f9fa',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h1>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    StraightCap
                </Link>
            </h1>
            <nav>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    gap: '20px'
                }}>
                    <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
                    <li><Link to="/artists" style={{ textDecoration: 'none', color: 'inherit' }}>Artists</Link></li>
                    <li><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
                    {isLoggedIn ? (
                        <li>Profile/Logout</li> // This could be expanded into a more detailed submenu if needed.
                    ) : (
                        <li>
                            User
                            <ul style={{ listStyleType: 'none', margin: 0, padding: '10px', backgroundColor: '#f1f1f1', position: 'absolute' }}>
                                <li><Link to="/user/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></li>
                                <li><Link to="/user/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link></li>
                            </ul>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
