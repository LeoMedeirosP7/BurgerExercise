import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
    <p className="NavigationItem">{props.text}</p>
);

export default navigationItem