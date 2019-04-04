import { takeLatest, call, put } from 'redux-saga/effects';
import axios from "axios";
import { actionSuccessWeather, actionStatusWeather, actionWeatherError } from './action';

//При вызове action actionGetWeather (GET_WEATHER_REQUEST) отработает saga getWeatherWorker
export default function* rootWatcher(){
    yield takeLatest("GET_WEATHER_REQUEST", getWeatherWorker); 
};

//Saga getWeatherWorker которая получит данные с сервера и передаст данные в action actionSuccessWeather (GET_WEATHER_SUCCESS)  который положит данные в состояние city
function* getWeatherWorker(){
    yield put(actionStatusWeather(false)); 
    const response = yield call(axios.get, "http://localhost:3012/weather");
    if (response.status === 200) {
        console.log('saga if')
        yield put(actionSuccessWeather(response.data)); //Положим полученные данные в state news 
        yield put(actionStatusWeather(true));
    } else {
        yield put(actionWeatherError("Error!"));
    }
}



