import React, { useState } from 'react';
import './../styles/Header.css';
import logo from '../images/logo_header.jpg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src={logo} alt='Logo Asinfar'/></a>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
            {isOpen && (
                    <>
                        <span className="close-btn" onClick={toggleMenu}>×</span>
                        <div className="logo">
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                    </>
                )}
                <a href="/section1">Institucional</a>
                <a href="/section2">Noticias</a>
                <a href="/section3">Impacto Social</a>
                <a href="/section4">Normatividad</a>
                <a href="/section5">Contactenos</a>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;
