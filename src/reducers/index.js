import { combineReducers } from 'redux';

export const initState = {
    city: ['Город'],
    isGettingCityWeather: false,
    error: ""
};

const mainReducer = (state = initState, action) => {
   switch(action.type) {
      
        case "SET_WEATHER":
            return {
                ...state,
                city: action.payload
        };
   
        case "SET_IS_GETTING_WEATHER":
            return {
                ...state,
                isGettingCityWeather: action.payload
        };
  
        case "SET_WEATHER_ERORR":
            return {
                ...state,
                error: action.payload
        };      
        default:
            return state;    
    }
};

const todoApp = combineReducers ({
    mainReducer
});
  
export default todoApp;  