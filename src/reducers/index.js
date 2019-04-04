import { combineReducers } from 'redux';

export const initState = {
    city: {},
    isFetching: false, //Данное состояние служит флагом для отслеживания загрузки данных 
    error: ""
};

const mainReducer = (state = initState, action) => {
   switch(action.type) {
    case 'GET_WEATHER_SUCCESS':
        return {
            ...state,
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