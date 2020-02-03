import React from 'react';
import './NavigationItem.css';
import PropTypes from 'prop-types';

const navigationItem = (props) => (
    <p className="NavigationItem">{props.text}</p>
);

navigationItem.propTypes = {
    text: PropTypes.string,
};

export default navigationItem