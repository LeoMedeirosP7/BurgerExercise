import React from 'react';
import burgerLogo from './../../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => (
    <>
        <img className="LogoToolbar" src={burgerLogo} alt='burgerLogo' />
    </>
);

export default logo;