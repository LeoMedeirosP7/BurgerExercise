import React from 'react';
import './OrderSummary.css';
import Logo from './../Logo/Logo';

const orderSummary = (props) => {
    const verify = ((props.meat > 0)||(props.salad > 0)||(props.Cheese > 0)||(props.bacon > 0));
    const quantities = (
        <div>
            {props.meat > 0 ? <p>Meat: {props.meat}</p> : null}
            {props.salad > 0 ? <p>Salad: {props.salad}</p> : null}
            {props.cheese > 0 ? <p>Cheese: {props.cheese}</p> : null}
            {props.bacon > 0 ? <p>Bacon: {props.bacon}</p> : null}
        </div>
    );

    return (
        props.order ?
        <div className="Order">
            <Logo />
            <div className="DataText">
                <p>A delicius burger with:</p>
                {verify ? quantities : <p>Nothing</p>}

                <p style={{marginTop: '70px'}}>Total Price: U${props.price}</p>

                <p style={{marginTop: '70px'}}>Do you want to request this burger?</p>
            </div>
            <div className="ButtonContainer">
                <button className="OrderSummaryButton Cancel" onClick={props.unOrder}>Cancel</button>
                <button className="OrderSummaryButton Send" onClick={props.sendRequest} disabled={!verify}>Send request</button>
            </div>
        </div> 
        : null
    );
};

export default orderSummary;