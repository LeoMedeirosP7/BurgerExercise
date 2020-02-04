import React from 'react';
import './OrderSummary.css';
import Logo from './../Logo/Logo';
import PropTypes from 'prop-types';

const orderSummary = (props) => {
    const {
        meat,
        salad,
        cheese,
        bacon,
        price,
        order,
        unOrder,
        sendRequest,
    } = props;

    const verify = ((meat > 0)||(salad > 0)||(cheese > 0)||(bacon > 0));
    const quantities = (
        <div>
            {meat > 0 ? <p>Meat: {meat}</p> : null}

            {salad > 0 ? <p>Salad: {salad}</p> : null}

            {cheese > 0 ? <p>Cheese: {cheese}</p> : null}

            {bacon > 0 ? <p>Bacon: {bacon}</p> : null}

            <p style={{marginTop: '50px'}}>Filling Sequence: </p>

            {
                props.filling.map(
                    (item, index) => (
                        <p key={ `${item}-${index}` }>
                            {item}
                        </p>
                    )
                )
            }
        </div>
    );

    return (
        order ?
            <div className="Order">
                <Logo />
                <div className="DataText">
                    <p className="SeparatedText">
                        <p>A delicius burger with:</p>
                        {
                            verify ? 
                                quantities 
                            : 
                                <div>
                                    <p>Nothing</p>
                                </div>
                        }
                    </p>

                    <p className="SeparatedText">
                        Total Price: U${price.toFixed(2)}
                    </p>

                    <p className="SeparatedText">
                        Do you want to request this burger?
                    </p>
                </div>

                <div className="ButtonContainer">
                    <button 
                        className="OrderSummaryButton Cancel" 
                        onClick={unOrder} 
                    >
                        Cancel
                    </button>

                    <button 
                        className="OrderSummaryButton Send" 
                        onClick={sendRequest} 
                        disabled={!verify}
                    >
                        Send request
                    </button>
                </div>
            </div> 
        : 
            null
    );
};

orderSummary.propTypes = {
    sendRequest: PropTypes.func,
    unOrder: PropTypes.func,
    order: PropTypes.bool,
    price: PropTypes.number,
    filling: PropTypes.array,

    bacon: PropTypes.number,
    cheese: PropTypes.number,
    salad: PropTypes.number,
    meat: PropTypes.number,
};

export default orderSummary;