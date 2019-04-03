//Action сетевые
export const actionGetWeather = (isFetching) => {return {type: "GET_WEATHER_REQUEST", payload: isFetching}} //При вызове данного action по средствам saga getNewsWorker будет отправлять сетевой запрос Get к БД 
export const actionSetWeather = (city) => {return {type: "GET_WEATHER_SUCCEEDED", payload: city}};
export const actionSetWeatherError = (erorr) => {return {type: "GET_WEATHER_FAILED", payload: erorr}};
export const actionSetIsGettingWeather = (erorr) => {return {type: "STATUS_WEATHER"}};
