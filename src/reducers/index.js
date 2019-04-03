import { combineReducers } from 'redux';

export const initState = {
    city: {},
    isFetching: false,
    error: ""
};

const mainReducer = (state = initState, action) => {
   switch(action.type) {
    case 'GET_WEATHER_REQUEST':
        return {
            ...state,
            isFetching: true,
            error: null,
    };
    case 'GET_WEATHER_SUCCEEDED':
        return {
            ...state,
            isFetching: false,
            city: action.payload,
    };
    case 'GET_WEATHER_FAILED':
        return {
            ...state,
            isFetching: false,
            error: action.payload,
    };
    case 'STATUS_WEATHER':
        return {
            ...state,
            isFetching: action.payload
        }  
    default:
        return state;    
    }
};

export const todoApp = combineReducers ({
    mainReducer: mainReducer
});
  
export default todoApp;  