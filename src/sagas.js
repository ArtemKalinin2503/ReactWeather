import { takeLatest, call, put } from 'redux-saga/effects';
import axios from "axios";
import { actionSetWeather, actionSetIsGettingWeather, actionSetWeatherError } from './action';

export default function* rootWatcher(){
    yield takeLatest("GET_WEATHER_REQUEST", getWeatherWorker); 
};

function* getWeatherWorker(){
    //yield put(actionSetIsGettingWeather(true)); 
    const response = yield call(axios.get, "http://localhost:3012/weather");
    if (response.status === 200) {
        console.log('saga if')
        yield put(actionSetWeather(response.data)); //Положим полученные данные в state news 
        //yield put(actionSetIsGettingWeather(false));
    } else {
        yield put(actionSetWeatherError("Error!"));
    }
}



