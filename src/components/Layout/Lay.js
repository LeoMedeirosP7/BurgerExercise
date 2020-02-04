import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import arrayMove from 'array-move';

import Toolbar from './Toolbar/Toolbar';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import SideDrawer from './SideDrawer/SideDrawer';
import OrderSummary from './OrderSummary/OrderSummary';
import './Lay.css';

import {connect} from 'react-redux';
import * as pageManagementActions from './../../reduxStore/actions/pageManagementActions';
import * as fillingManagementActions from './../../reduxStore/actions/fillingManagementActions'

const Actions = {...pageManagementActions, ...fillingManagementActions};

const Lay = (props) => {
    const {
        setFilling,
        addMeat,
        rmvMeat,
        addSalad,
        rmvSalad,
        addBacon,
        rmvBacon,
        addCheese,
        rmvCheese,
        setPrice,
        setOrder,
        setSide,
    } = props;

    const {
        filling,
        meat,
        salad,
        bacon,
        cheese,
        price,
    } = props.fillingManagement;
    
    const {
        order,
        side
    } = props.pageManagement;
    
    let classeMain = "";

    let classeGroup="Group";

    if (side) {
        classeMain="Side";
        classeGroup += " GroupCentralize";
    } 
    else
        classeMain="Setup";

    const ingredients = [meat, salad, bacon, cheese];



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

    useEffect(
        () => {
            setPrice();
        } ,
        [meat, salad, bacon, cheese]
    );


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

                    <b className="priceCaption">
                        PRICE: U${ price.toFixed(2) }
                    </b>

                    <BuildControls 
                        add={addIngredient} 
                        rmv={removeIngredient} 
                    />

                    <button 
                        className='OrderButton' 
                        onClick={
                            () => setOrder()
                        }
                    >
                        Order Summary
                    </button>

                    <OrderSummary 
                        order={order} 
                        unOrder={() => setOrder()}
                        sendRequest={sendRequest}
                        meat={meat}
                        salad={salad}
                        cheese={cheese}
                        bacon={bacon}
                        price={price}
                        filling={filling}
                    />
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => (
    { 
        fillingManagement: state.fillingManagement, 
        pageManagement: state.pageManagement
    }
);

const mapDispatchToProps = dispatch => (
    {
        setFilling: (localFilling) => dispatch({type: Actions.alterFilling, value: localFilling}),
        addMeat: () => dispatch({type: Actions.newMeat}),
        rmvMeat: () => dispatch({type: Actions.removeMeat}),
        addSalad: () => dispatch({type: Actions.newSalad}),
        rmvSalad: () => dispatch({type: Actions.removeSalad}),
        addCheese: () => dispatch({type: Actions.newCheese}),
        rmvCheese: () => dispatch({type: Actions.removeCheese}),
        addBacon: () => dispatch({type: Actions.newBacon}),
        rmvBacon: () => dispatch({type: Actions.removeBacon}),
        setPrice: () => dispatch(({type: Actions.updatePrice})),
        setOrder: () => dispatch({type: Actions.alterOrder}),
        setSide: () => dispatch({type: Actions.alterSide}),
    }
);

Lay.propTypes = {
    fillingManagement: PropTypes.object,
    pageManagement: PropTypes.object,
    
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
    setSide: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lay);