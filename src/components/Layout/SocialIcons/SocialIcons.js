import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
    return (
        <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="youtube" href="#"><i className="fa fa-youtube"></i></a></li>
            <li><a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a></li>
        </ul>
    );
};

export default SocialIcons;
