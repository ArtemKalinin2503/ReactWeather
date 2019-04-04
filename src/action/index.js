//Action сетевые
export const actionGetWeather = () => {return {type: "GET_WEATHER_REQUEST"}} //При вызове данного action по средствам saga getNewsWorker будет отправлять сетевой запрос Get к БД 
export const actionSuccessWeather = (city) => {return {type: "GET_WEATHER_SUCCESS", payload: city}}; //Данный action получает данные
export const actionStatusWeather = (isFetching) => {return {type: "STATUS_WEATHER", payload: isFetching}}; //Данный action служит 'флагом' при загрузке данных
export const actionWeatherError = (erorr) => {return {type: "GET_WEATHER_FAILED", payload: erorr}};

