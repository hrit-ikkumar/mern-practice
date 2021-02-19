const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const axios = require('axios');

// state

const initialState = {
    loading: true,
    users: [],
    error: ''
};

// Actions

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// Action Creators

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

const fetchUserSuccess = users => {
    return  {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
};


const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};



// action creator

const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest()); // sets loading true

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data array of data 
            const users = response.data.map(user => user.id);
            dispatch(fetchUserSuccess(users));
        })
        .catch(error => {
            // error.message

            dispatch(fetchUserFailure(error.message));
        });
    }
}


// Reducer function

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return {...state}
    }
}

// Store

const store = createStore(reducer, applyMiddleware(thunk));


store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUser());