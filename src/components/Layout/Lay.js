import React, { useState, useEffect } from "react";
import Toolbar from './Toolbar/Toolbar';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import SideDrawer from './SideDrawer/SideDrawer';
import './Lay.css';
import OrderSummary from './OrderSummary/OrderSummary';
import arrayMove from 'array-move';


const Lay = (props) => {
  
    const [price, setPrice] = useState(0);
    const [side, setSide] = useState(false);
    const [order, setOrder] = useState(false);

    const [meat, setMeat] = useState(0);
    const [salad, setSalad] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [bacon, setBacon] = useState(0);

    const [filling, setFilling] = useState([]);

    const onSortEnd = ({oldIndex, newIndex}) => {
        const newPosition = arrayMove(filling, oldIndex, newIndex);
        setFilling(newPosition);
        debugger
      };

    const addIngredient = (ingredient) => {
        switch (ingredient){
            //if the ingredient is meat
            case 'Meat':
                filling.push('Meat');
                setMeat(meat + 1);
                break;

            //if the ingredient is salad
            case 'Salad':
                filling.push('Salad');
                setSalad(salad+1);
                break;

            //if the ingredient is bacon
            case 'Bacon':
                filling.push('Bacon');
                setBacon(bacon + 1);
                break;

            //if the ingredient is cheese
            case 'Cheese':
                filling.push('Cheese');
                setCheese(cheese + 1);
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
                if(meat > 0)
                    filling.map((item, index) => {
                        console.log('ei')
                        if(item === 'Meat'){
                            filling.splice(index, 1);
                            setMeat(meat - 1);
                            return 0;
                        }
                    });
                break;

            //if the ingredient is salad
            case 'Salad':
                if(salad > 0)
                    filling.map((item, index) => {
                        if(item === 'Salad'){
                            filling.splice(index, 1);
                            setMeat(salad - 1);
                            return 0;
                        }
                    });
                break;

            //if the ingredient is bacon
            case 'Bacon':
                if(bacon > 0)
                    filling.map((item, index) => {
                        if(item === 'Bacon'){
                            filling.splice(index, 1);
                            setMeat(bacon - 1);
                            return 0;
                        }
                    });
                break;

            //if the ingredient is cheese
            case 'Cheese':
                if(cheese > 0)
                    filling.map((item, index) => {
                        if(item === 'Cheese'){
                            filling.splice(index, 1);
                            setMeat(cheese - 1);
                            return 0;
                        }
                    });
                break;
            
            //wrong using
            default:
                break;
        }
    }

    const sendRequest=(props) => {
        alert('Request sended, please wait :D');
        setOrder(false);
    }

    useEffect(() => {
        setPrice((meat * 1.3) + (salad * 0.5) + (bacon * 0.7) + (cheese * 0.4));
    },[meat, salad, bacon, cheese]);
    
    const ingredients = [meat, salad, bacon, cheese];

    let classeMain = "";
    let classeGroup="Group";
    if(side){
        classeMain="Side";
        classeGroup+=" GroupCentralize";
    }
    else{
        classeMain="Setup";
    }

    return(
        <div>
            <Toolbar menu={() => setSide(!side)} />

            <main className={classeMain}>

                <SideDrawer on={side} />

                <div className={classeGroup}>

                    <Burger 
                        ingredients={ingredients}
                        side={side} 
                        filling={filling}
                        onSortEnd={onSortEnd}/>

                    <b className="priceCaption">PRICE: U${price.toFixed(2)}</b>

                    <BuildControls add={addIngredient} rmv={removeIngredient} />

                    <button className='OrderButton' onClick={() => setOrder(true)}>Order Summary</button>

                    <OrderSummary 
                        order={order} 
                        unOrder={() => setOrder(false)}
                        sendRequest={sendRequest}
                        meat={meat}
                        salad={salad}
                        cheese={cheese}
                        bacon={bacon}
                        price={price.toFixed(2)}/>
                </div>
            </main>
        </div>
    );
}

export default Lay;