import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLinks.css';

const AuthLinks = () => {
    return (
        <ul className="login">
            <li><Link to="/user/login" className="login-link"><i className="fa fa-user"></i>Login</Link></li>
            <li><Link to="/user/register" className="register-link"><i className="fa fa-shopping-cart"></i>Register</Link></li>
        </ul>
    );
};

export default AuthLinks;
