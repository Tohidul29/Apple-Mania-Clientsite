import React from 'react';
import Logo from '../../img/Logo/logo.png';
import '../Footer/Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-color text-center py-3' >
            <h5> <img className='rounded-circle' src={Logo} width={30} height={30} alt="" /> Apple-Mania &copy; {year}</h5>
        </footer>
    );
};

export default Footer;