//Actions для работы со state
export const actionChangeCity = (value) => {return {type: "CHANGE_CITY", payload: value}};
//Action сетевые
export const actionGetWeather = () => {return {type: "GET_WEATHER"}} //При вызове данного action по средствам saga getNewsWorker будет отправлять сетевой запрос Get к БД 
export const actionSetWeather = (city) => {return {type: "SET_WEATHER", payload: city}};
export const actionSetIsGettingWeather = (isGettingWeather) => {return {type: "SET_IS_GETTING_WEATHER", payload: isGettingWeather}};
export const actionSetWeatherError = (erorr) => {return {type: "SET_WEATHER_ERORR", payload: erorr}};
