import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import axios from "axios";
import { actionGetWeather, actionSetWeather, actionSetIsGettingWeather, actionSetWeatherError } from './action';

export default function* rootWatcher(){
    yield takeLatest("GET_WEATHER", getWeatherWorker); 
};

function* getWeatherWorker(){
    yield put(actionSetIsGettingWeather(true)); 
    const headerParams = {
        'X-Yandex-API-Key': '88060699-4388-43d5-bbbf-84b6297197ef',
      };
    const response = yield call(axios.get, "https://api.weather.yandex.ru/v1/forecast?lat=55.75396&lon=37.620393&extra=true", {headers: headerParams});
    if (response.status === 200) {
        yield put(actionSetWeather(response.data)); //Положим полученные данные в state news 
        yield put(actionSetIsGettingWeather(false));
    } else {
        yield put(actionSetWeatherError("Error!"));
    }
}



