import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const arrRepeat = (num) => {
    let array = [];
    for(let i = 0; i < num; i++)
        array.push(0);
    return array;
}

const burger = (props) => {
    const verify = (props.filling.length !== 0);

    const SortableItem = SortableElement(({value}) => <BurgerIngredient ingredient={value}/>);

    const SortableList = SortableContainer(({items}) => {
        return (
          <ul>
            {items.map((value, index) => (
              <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
          </ul>
        );
      });

    return(
                <div className="Hoc">
                    <BurgerIngredient ingredient='BreadTop' />
                        {verify ? <SortableList items={props.filling} onSortEnd={props.onSortEnd} /> : (<b className="addCaption">ADD YOUR INGREDIENTS HERE</b>)}
                    <BurgerIngredient ingredient='BreadBottom' />
                </div>
    );
}

export default burger;