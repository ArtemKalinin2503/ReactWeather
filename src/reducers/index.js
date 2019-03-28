import { combineReducers } from 'redux';

export const initState = {
    city: ['Город'],
    isGettingCityWeather: false,
    error: ""
};

const mainReducer = (state = initState, action) => {
   switch(action.type) {
        //Action который будет получать данные из БД (с помощью saga getNewsWorker)   
        case "SET_WEATHER":
            return {
                ...state,
                city: action.payload
        };
        //Action 'флаг' который оповещает что начался сетевой запрос (пригодиться для Loader) 
        case "SET_IS_GETTING_WEATHER":
            return {
                ...state,
                isGettingCityWeather: action.payload
        };
        //Action для получения ошибок 
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