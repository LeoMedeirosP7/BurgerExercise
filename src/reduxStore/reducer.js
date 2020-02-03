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

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_MEAT':
            state.filling.push('Meat');
            return {
                ...state,
                meat: state.meat + 1
            };
        
        case 'RMV_MEAT':
            if( (state.meat > 0) && (state.filling !== [])){

                state.filling.splice( state.filling.indexOf('Meat'), 1 );
                return {
                    ...state,
                    meat: state.meat - 1
                };

            }
            return state;
            

        case 'ADD_SALAD':
            state.filling.push('Salad');

            return {
                ...state,
                salad: state.salad + 1
            };

        case 'RMV_SALAD':
            if( (state.salad > 0) && (state.filling !== [])){

                state.filling.splice(state.filling.indexOf('Salad'), 1);
                return {
                    ...state,
                    salad: state.salad - 1
                };

            }
            return state;

        case 'ADD_CHEESE':
            state.filling.push('Cheese');

            return {
                ...state,
                cheese: state.cheese + 1
            };

        case 'RMV_CHEESE':
            if( (state.cheese > 0) && (state.filling !== [])){
                state.filling.splice(state.filling.indexOf('Cheese'), 1);
                return {
                    ...state,
                    cheese: state.cheese - 1
                }
            }
            return state;

        case 'ADD_BACON':
            state.filling.push('Bacon');
            
            return {
                ...state,
                bacon: state.bacon + 1
            }

        case 'RMV_BACON':
            if( (state.bacon > 0) && (state.filling !== [])){
                state.filling.splice(state.filling.indexOf('Bacon'), 1);
                return {
                    ...state,
                    bacon: state.bacon - 1,
                }
            }
            return state;

            

        case 'SET_ORDER':
            return {
                ...state,
                order: !state.order
            }

        case 'SET_FILLING':
            return {
                ...state,
                filling: action.value
            }

        case 'SET_PRICE': {
                const newPrice = (state.meat * 1.3) + (state.salad * 0.5) + (state.bacon * 0.7) + (state.cheese * 0.4) + 2;
                return {
                    ...state,
                    price: newPrice
                }
            }

        case 'SET_SIDE':
            return{
                ...state,
                side: !state.side,
            }
        
        default:
            return state;
    }
};

export default rootReducer;