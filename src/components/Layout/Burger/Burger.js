import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import PropTypes from 'prop-types';



const burger = (props) => {
    const {
      filling,
      onSortEnd
     } = props;

    const verify = filling.length !== 0;

    const SortableItem = SortableElement(
      ( {value} ) => <BurgerIngredient ingredient={value} />
    );

    const SortableList = SortableContainer( ( {items} ) => {
        return (
          <ul className="Sortable">
            {
              items.map(
                (value, index) => (
                  <SortableItem 
                      className="Sortable"
                      key={`item-${value}`}
                      index={index} 
                      value={value} 
                  />
                )
              )
            }
          </ul>
        );
      });

    return(
                <div className="Hoc">
                    <BurgerIngredient ingredient='BreadTop' />
                        {
                          verify ? 
                              <SortableList items={filling} onSortEnd={onSortEnd} /> 
                          : 
                              <b className="addCaption">
                                ADD YOUR INGREDIENTS HERE
                              </b>

                        }
                    <BurgerIngredient ingredient='BreadBottom' />
                </div>
    );
}

burger.propTypes = {
  filling: PropTypes.array,
  onSortEnd: PropTypes.func,

};

export default burger;