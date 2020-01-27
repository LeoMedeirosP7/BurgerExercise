import React from 'react';
import Logo from './../Logo/Logo';
import './SideDrawer.css'
import Navigation from './../Navigation/Navigation';

const sideDrawer = (props) => {
    return(
        props.on ?
        <div className="SideDrawer">
            <Logo />
            <Navigation contextClass="side"/>
        </div> : null
    );
};

export default sideDrawer;