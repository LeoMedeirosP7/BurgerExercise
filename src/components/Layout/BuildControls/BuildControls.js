import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';
import PropTypes from 'prop-types';

const buildControls = (props) => {
    const {add, rmv} = props;
    return(
        <div className="BuildControls">
            <BuildControl ingredient='Meat' add={add} rmv={rmv} />
            <BuildControl ingredient='Bacon' add={add} rmv={rmv}/>
            <BuildControl ingredient='Cheese' add={add} rmv={rmv}/>
            <BuildControl ingredient='Salad' add={add} rmv={rmv}/>
        </div>
    );
};

buildControls.propTypes = {
    add: PropTypes.func,
    rmv: PropTypes.func
};

export default buildControls;