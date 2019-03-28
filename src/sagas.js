import { takeLatest, select, call, put, fork } from 'redux-saga/effects';
import axios from "axios";
import { actionGetWeather, actionSetWeather, actionSetIsGettingWeather, actionSetWeatherError } from './action';

export default function* rootWatcher(){

}