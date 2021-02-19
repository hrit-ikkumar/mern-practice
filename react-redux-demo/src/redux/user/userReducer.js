import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const initialState ={
    loading: true,
    users: [],
    error: ''
};

const reducer = (state= initialState, action) => {
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            {
                return {
                    ...state,
                    loading: true,

                }
            }
        case FETCH_USERS_SUCCESS: 
            {
                return {
                    ...state, 
                    loading: false,
                    users: action.payload
                }
            }
        case FETCH_USERS_FAILURE:
            {
                return {
                    ...state,
                    loading: false,
                    users: [],
                    error: action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;