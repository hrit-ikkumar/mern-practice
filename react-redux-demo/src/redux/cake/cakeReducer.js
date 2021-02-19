import {BUY_CAKE} from './cakeActionType';

const initialState = {
    numOfCake: 10
};

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state, 
                numOfCake: state.numOfCake - action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default cakeReducer;