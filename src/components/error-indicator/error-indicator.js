import React from 'react';

import './error-indicator.css';

import icon from './deathstar.jpg';


const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error"/>
            <span>
                Something went wrong
            </span>
        </div>
    )
};

export default ErrorIndicator;