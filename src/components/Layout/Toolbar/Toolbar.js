import React from 'react';
import Logo from './../Logo/Logo';
import Navigation from './../Navigation/Navigation';
import './Toolbar.css';
import PropTypes from 'prop-types';

const toolbar = (props) => (
    <header>
        <div className="Toolbar">
            <div className="Menu" onClick={props.menu}>
                <p className="textMenu">Menu</p>
            </div>
            <Logo />
            <Navigation contextClass="ToolB"/>
        </div>
    </header>
);

toolbar.propTypes = {
    menu: PropTypes.func
};

export default toolbar;