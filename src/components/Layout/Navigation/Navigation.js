import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.css';
import PropTypes from 'prop-types';

const navigation = (props) => (
    <div className={props.contextClass}>
        <NavigationItem text='Burger Builder' />
        <NavigationItem text='CheckOut' />
    </div>
);

navigation.propTypes = {
    contextClass: PropTypes.string,
};

export default navigation;