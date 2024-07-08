import React from 'react';
import './../styles/Footer.css';
import logo from '../images/logo_footer.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section top-section">
                <div className="logo">
                    <a href="/"><img src={logo} alt='Logo Asinfar'/></a>
                </div>
                <div className="page-info">
                    <p>Email: info@example.com</p>
                    <p>Address: 123 Main Street, City, Country</p>
                    <p>Contact: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-section bottom-section">
                <p>&copy; 2024</p>
                <p>Developed by: Your Company</p>
            </div>
        </footer>
    );
};

export default Footer;
