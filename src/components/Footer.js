import React from 'react';
import './../styles/Footer.css';
import logo from '../images/logo_footer.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section top-section">
                <div className="logo-container">
                    <div className="logo">
                        <a href="/"><img src={logo} alt='Logo Asinfar'/></a>
                    </div>
                    <p className="habeas-data">Consulta nuestra <a href=''>Politica Habeas data</a></p>
                </ div>
                <div className="page-info">
                    <p>Calle 70 # 7 - 60</p>
                    <p>Oficina 102</p>
                    <p>PBX: +57(60-1) 7438845/47/48/52</p>
                    <p>Cel: +57 3132540626</p>
                    <p>administrativo@asinfar.com.co</p>
                    <p>Bogotá, Colombia </p>
                </div>
            </div>
            <div className="footer-section bottom-section">
                <p>&copy; 2024 | Asociación de Industrias Farmacéuticas en Colombia</p>
                <p>Developed by: JuLaJu</p>
            </div>
        </footer>
    );
};

export default Footer;
