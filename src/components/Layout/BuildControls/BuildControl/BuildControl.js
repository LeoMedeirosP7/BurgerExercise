import React from 'react';
import './BuildControl.css';
import PropTypes from 'prop-types';

const buildControl = (props) => {
    const {ingredient, add, rmv} = props;
    return (
        <div className="BuildControl">
            
            <button className="Button" onClick={() => rmv(ingredient)}><b>-</b></button>
            
            <p className="BuildCaption">{ingredient}</p>
            
            <button className="Button" onClick={() => add(ingredient)}><b>+</b></button>
        </div>
    );
};

buildControl.propTypes = {
    ingredient: PropTypes.string,
    add: PropTypes.func,
    rmv: PropTypes.func
};

export default buildControl;