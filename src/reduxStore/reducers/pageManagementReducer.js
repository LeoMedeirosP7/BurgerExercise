const Actions = require(`../actions/pageManagementActions`);
const initialState = {
    order: false,
    side: false
}


const {
    alterOrder,
    alterSide
} = Actions;



const pageManagementReducer = (state=initialState, action) => {
    switch(action.type){
        case alterOrder:{
            const newStateOrder = !state.order;
            return {
                ...state,
                order: newStateOrder
            }
        }

        case alterSide:{
            const newStateSide = !state.side;
            return{
                ...state,
                side: newStateSide,
            }
        }
        
        default:
            return state;
    }
};

export default pageManagementReducer;