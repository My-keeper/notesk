import React from 'react';
import './Footer.css'

const currentYear = new Date().getFullYear();

const Footer = () => (
        <div className="footer">
            <p>
             Copyright ⓒ {currentYear}
            </p>
        </div>
)

export default Footer 