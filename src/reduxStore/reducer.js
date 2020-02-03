const Actions = require(`./actions.js`)

const initialState = {
    price: 2,
    side: false,
    order: false,
    meat: 0,
    salad: 0,
    cheese: 0,
    bacon: 0,
    filling: [],
};

const {
    newMeat,
    removeMeat,
    newSalad,
    removeSalad,
    newCheese,
    removeCheese,
    newBacon,
    removeBacon,
    alterOrder,
    alterFilling,
    updatePrice,
    alterSide
} = Actions;

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case newMeat:{
            return {
                ...state,
                meat: state.meat + 1,
                filling: state.filling.concat('Meat')
            };
        }
        
        case removeMeat:{
            if( (state.meat > 0) && (state.filling !== [])){
                const newFilling=[...state.filling];
                newFilling.splice( state.filling.indexOf('Meat'), 1 );
                return {
                    ...state,
                    meat: state.meat - 1,
                    filling: newFilling
                };

            }
            return state;
        }
            
        case newSalad:{
            return {
                ...state,
                salad: state.salad + 1,
                filling: state.filling.concat('Salad')
            };
        }

        case removeSalad:{
            if( (state.salad > 0) && (state.filling !== [])){
                const newFilling = [...state.filling];
                newFilling.splice(state.filling.indexOf('Salad'), 1);
                return {
                    ...state,
                    salad: state.salad - 1,
                    filling: newFilling
                };

            }
            return state;
        }

        case newCheese:{
            return {
                ...state,
                filling: state.filling.concat('Cheese'),
                cheese: state.cheese + 1
            };
        }

        case removeCheese:{
            if( (state.cheese > 0) && (state.filling !== [])){
                const newFilling=[...state.filling];
                newFilling.splice(state.filling.indexOf('Cheese'), 1);
                return {
                    ...state,
                    cheese: state.cheese - 1,
                    filling: newFilling
                }
            }
            return state;
        }

        case newBacon:{        
            return {
                ...state,
                bacon: state.bacon + 1,
                filling: state.filling.concat('Bacon')
            }
        }

        case removeBacon:{
            if( (state.bacon > 0) && (state.filling !== [])){
                const newFilling = [...state.filling];
                newFilling.splice(state.filling.indexOf('Bacon'), 1);
                return {
                    ...state,
                    bacon: state.bacon - 1,
                    filling: newFilling
                }
            }
            return state;
        }

        case alterOrder:{
            return {
                ...state,
                order: !state.order
            }
        }

        case alterFilling:{
            return {
                ...state,
                filling: action.value
            }
        }

        case updatePrice: {
                const newPrice = (state.meat * 1.3) + (state.salad * 0.5) + (state.bacon * 0.7) + (state.cheese * 0.4) + 2;
                return {
                    ...state,
                    price: newPrice
                }
            }

        case alterSide:{
            return{
                ...state,
                side: !state.side,
            }
        }
        
        default:
            return state;
    }
};

export default rootReducer;