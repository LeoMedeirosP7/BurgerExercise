import React from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => <div className={props.ingredient}/>;

burgerIngredient.propTypes = {
    ingredient: PropTypes.string
};

export default burgerIngredient;