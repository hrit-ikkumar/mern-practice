const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
// Action Type
// Simple action which needs to be done
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Define Action
// Object with type property
const BUY_CAKE_ACTION = 
{
    type: BUY_CAKE,
    info: 'first redux action'
};

// Action Creator
// Simply create action which returns action

const buyIceCream = ()=> {
    return {
        type: BUY_ICECREAM  
    }
}



function buyCake () {
    console.log("BUY CAKE FUNCTION");
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    };
    // return BUY_CAKE_ACTION;
}

// State are immutable in redux

// Reducer
// A function that accepts prevState and action as argument and returns next state of acpplication

// const initalState = {
//     numOfCake: 10,
//     numOfIceCream: 20
// };

const initialCakeState = {
    numOfCake: 10
};

const initialIceCreamState = {
    numOfIceCream: 20
}


function cakeReducer(state = initialCakeState, action){
    console.log("BUY CAKE REDUCER FUNCTION");
    switch(action.type)
    {
        case BUY_CAKE:
            // ...state makes copy of state and make changes of only properties which are described in object only 
            return {...state, numOfCake: state.numOfCake - 1}
        default: 
            return state;
    }
}

function iceCreamReducer(state = initialIceCreamState, action){
    console.log("BUY CAKE REDUCER FUNCTION");
    switch(action.type)
    {
        case BUY_ICECREAM:
            return {...state, numOfIceCream: state.numOfIceCream - 1}
        default: 
            return state;
    }
}


// Main Store
// Combining multiple reducers
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial State: ' + store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());  
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

console.log(store.getState());