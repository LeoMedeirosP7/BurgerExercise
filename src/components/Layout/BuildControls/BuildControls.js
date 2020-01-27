import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const buildControls = (props) => {
    return(
        <div className="BuildControls">
            <BuildControl ingredient='Meat' add={props.add} rmv={props.rmv} />
            <BuildControl ingredient='Bacon' add={props.add} rmv={props.rmv}/>
            <BuildControl ingredient='Cheese' add={props.add} rmv={props.rmv}/>
            <BuildControl ingredient='Salad' add={props.add} rmv={props.rmv}/>
        </div>
    );
};

export default buildControls;