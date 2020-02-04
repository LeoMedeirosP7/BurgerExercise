import React from 'react';
import Logo from './../Logo/Logo';
import './SideDrawer.css'
import Navigation from './../Navigation/Navigation';
import PropTypes from 'prop-types';

const sideDrawer = (props) => {
    return(
        props.on ?
            <div className="SideDrawer">
                <Logo />
                <Navigation contextClass="side" />
            </div> 
        :
            null
    );
};

sideDrawer.propTypes = {
    on: PropTypes.bool,
};

export default sideDrawer;