import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.css';

const navigation = (props) => (
    <div className={props.contextClass}>
        <NavigationItem text='Burger Builder' />
        <NavigationItem text='CheckOut' />
    </div>
);

export default navigation;