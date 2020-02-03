import React, { useEffect } from "react";
import Toolbar from './Toolbar/Toolbar';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import SideDrawer from './SideDrawer/SideDrawer';
import './Lay.css';
import OrderSummary from './OrderSummary/OrderSummary';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

const Lay = (props) => {
    const {
        filling,
        setFilling,
        addMeat,
        rmvMeat,
        addSalad,
        rmvSalad,
        addBacon,
        rmvBacon,
        addCheese,
        rmvCheese,
        meat,
        salad,
        bacon,
        cheese,
        price,
        setPrice,
        order,
        setOrder,
        side,
        setSide,
    } = props;

    const onSortEnd = ({oldIndex, newIndex}) => {
        const newPosition = arrayMove(filling, oldIndex, newIndex);
        setFilling(newPosition);
    };

    const addIngredient = (ingredient) => {
        switch (ingredient){
            //if the ingredient is meat
            case 'Meat':
                addMeat();
                break;

            //if the ingredient is salad
            case 'Salad':
                addSalad();
                break;

            //if the ingredient is bacon
            case 'Bacon':
                addBacon();
                break;

            //if the ingredient is cheese
            case 'Cheese':
                addCheese();
                break;
            
            //wrong using
            default:
                console.warn("add ingredient: Wrong Using");
                break;
        }
    }

    const removeIngredient = (ingredient) => {
        switch (ingredient){
            //if the ingredient is meat
            case 'Meat':
                rmvMeat();
                break;

            //if the ingredient is salad
            case 'Salad':
                rmvSalad();
                break;

            //if the ingredient is bacon
            case 'Bacon':
                rmvBacon();
                break;

            //if the ingredient is cheese
            case 'Cheese':
                rmvCheese();
                break;
            
            //wrong using
            default:
                break;
        }
    }

    const sendRequest=() => {
        alert('Request sended, please wait :D');
        setOrder();
    }

    const ingredients = [meat, salad, bacon, cheese];
    useEffect(() => {setPrice();} , [meat, salad, bacon, cheese]);

    let classeMain = "";
    let classeGroup="Group";
    if (side) {
        classeMain="Side";
        classeGroup += " GroupCentralize";
    } else {
        classeMain="Setup";
    }

    return(
        <div>
            <Toolbar menu={() => setSide()} />

            <main className={classeMain}>

                <SideDrawer on={side} />

                <div className={classeGroup}>

                    <Burger 
                        ingredients={ingredients}
                        side={side} 
                        filling={filling}
                        onSortEnd={onSortEnd}
                    />

                    <b className="priceCaption">PRICE: U${price.toFixed(2)}</b>

                    <BuildControls add={addIngredient} rmv={removeIngredient} />

                    <button className='OrderButton' onClick={() => setOrder()}>Order Summary</button>

                    <OrderSummary 
                        order={order} 
                        unOrder={() => setOrder()}
                        sendRequest={sendRequest}
                        meat={meat}
                        salad={salad}
                        cheese={cheese}
                        bacon={bacon}
                        price={price.toFixed(2)}
                        filling={filling}
                    />
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => (
    {
        setFilling: (localFilling) => dispatch({type: 'SET_FILLING', value: localFilling}),
        addMeat: () => dispatch({type: 'ADD_MEAT'}),
        rmvMeat: () => dispatch({type: 'RMV_MEAT'}),
        addSalad: () => dispatch({type: 'ADD_SALAD'}),
        rmvSalad: () => dispatch({type: 'RMV_SALAD'}),
        addCheese: () => dispatch({type: 'ADD_CHEESE'}),
        rmvCheese: () => dispatch({type: 'RMV_CHEESE'}),
        addBacon: () => dispatch({type: 'ADD_BACON'}),
        rmvBacon: () => dispatch({type: 'RMV_BACON'}),
        setOrder: () => dispatch({type: 'SET_ORDER'}),
        setSide: () => dispatch({type: 'SET_SIDE'}),
        setPrice: () => dispatch(({type: 'SET_PRICE'})),
    }
);

Lay.propTypes = {
    filling: PropTypes.array,
    setFilling: PropTypes.func,
    addMeat: PropTypes.func,
    rmvMeat: PropTypes.func,
    addSalad: PropTypes.func,
    rmvSalad: PropTypes.func,
    addBacon: PropTypes.func,
    rmvBacon: PropTypes.func,
    addCheese: PropTypes.func,
    rmvCheese: PropTypes.func,
    meat: PropTypes.number,
    salad: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    price: PropTypes.number,
    setPrice: PropTypes.func,
    order: PropTypes.bool,
    setOrder: PropTypes.func,
    side: PropTypes.bool,
    setSide: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lay);