import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        
        <button className="Button" onClick={() => props.rmv(props.ingredient)}><b>-</b></button>
        
        <p className="BuildCaption">{props.ingredient}</p>
        
        <button className="Button" onClick={() => props.add(props.ingredient)}><b>+</b></button>
    </div>
);

export default buildControl;