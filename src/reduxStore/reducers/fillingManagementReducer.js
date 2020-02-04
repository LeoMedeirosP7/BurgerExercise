const Actions = require(`../actions/fillingManagementActions`);

const initialState = {
    price: 2,
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

    alterFilling,

    updatePrice,
} = Actions;



const fillingManagementReducer = (state=initialState, action) => {
    switch(action.type){
        case newMeat:{
            const newStateMeat = state.meat + 1;
            return {
                ...state,
                meat: newStateMeat,
                filling: state.filling.concat('Meat')
            };
        }
        
        case removeMeat:{
            if( (state.meat > 0) && (state.filling !== [])){
                const stateFilling=[...state.filling];
                stateFilling.splice( stateFilling.indexOf('Meat'), 1 );

                const stateMeat = state.meat - 1;
                return {
                    ...state,
                    meat: stateMeat,
                    filling: stateFilling
                };

            }
            return state;
        }
            
        case newSalad:{
            const newStateSalad = state.salad + 1;
            return {
                ...state,
                salad: newStateSalad,
                filling: state.filling.concat('Salad')
            };
        }

        case removeSalad:{
            if( (state.salad > 0) && (state.filling !== [])){
                const newFilling = [...state.filling];
                newFilling.splice(state.filling.indexOf('Salad'), 1);

                const newStateSalad = state.salad - 1;
                return {
                    ...state,
                    salad: newStateSalad,
                    filling: newFilling
                };

            }
            return state;
        }

        case newCheese:{
            const newStateCheese = state.cheese + 1;
            return {
                ...state,
                filling: state.filling.concat('Cheese'),
                cheese: newStateCheese,
            };
        }

        case removeCheese:{
            if( (state.cheese > 0) && (state.filling !== [])){
                const newFilling=[...state.filling];
                newFilling.splice(state.filling.indexOf('Cheese'), 1);

                const newStateCheese = state.cheese - 1;
                return {
                    ...state,
                    cheese: newStateCheese,
                    filling: newFilling
                }
            }
            return state;
        }

        case newBacon:{
            const newStateBacon = state.bacon + 1;   
            return {
                ...state,
                bacon: newStateBacon,
                filling: state.filling.concat('Bacon')
            }
        }

        case removeBacon:{
            if( (state.bacon > 0) && (state.filling !== [])){
                const newFilling = [...state.filling];
                newFilling.splice(state.filling.indexOf('Bacon'), 1);

                const newStateBacon = state.bacon - 1;
                return {
                    ...state,
                    bacon: newStateBacon,
                    filling: newFilling
                }
            }
            return state;
        }

        case alterFilling:{
            return {
                ...state,
                filling: action.value
            }
        }

        case updatePrice: {
            const {meat, salad, bacon, cheese} = state;
            const newPrice = (meat * 1.3) + (salad * 0.5) + (bacon * 0.7) + (cheese * 0.4) + 2;
            return {
                ...state,
                price: newPrice
            }
        }

        default:
            return state;
    }
};

export default fillingManagementReducer;