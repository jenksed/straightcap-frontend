import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './NavBar.css'; 

const NavBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">Menu</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/artists">Artists</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    {isLoggedIn ? (
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile/Logout</Link>
                        </li>
                    ) : (
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="userDropdown">
                                <Link className="dropdown-item" to="/user/login">Login</Link>
                                <Link className="dropdown-item" to="/user/register">Register</Link>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
