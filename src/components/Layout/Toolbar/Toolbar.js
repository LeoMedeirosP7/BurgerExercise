import React from 'react';
import Logo from './../Logo/Logo';
import Navigation from './../Navigation/Navigation';
import './Toolbar.css';

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

export default toolbar;