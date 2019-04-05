import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import store from '../store';
import { actionGetWeather} from '../action'

class WeatherComponent extends Component {

    componentDidMount() {
        this.props.getWeather();   
    };

    render() { 
        //Проверка на завершение загрузки данных 
        if(this.props.isFetching) {
            //Выводимые данные 
            var temperatureNow = this.props.city.fact.temp; //Температура сегодня
            var location = this.props.city.info.slug; //Город (геолокация)
            var temperatureFells = this.props.city.fact.feels_like; //Ощущяется температура
            var iconPrecipitation = "https://yastatic.net/weather/i/icons/blueye/color/svg/" + this.props.city.fact.icon + ".svg"; //Иконка осадков
            //В массисе forecasts лежат основные данные о погоде
            var listDate = this.props.city.forecasts.map(function(data) {
                return (
                    <p>{data}</p>
                );
            });
            var dateToday = listDate[0].props.children.date; //Дата
            var temperatureDayMin = listDate[0].props.children.parts.day.temp_min; //Минимальная температура днем
            var temperatureDayMax = listDate[0].props.children.parts.day.temp_max; //Максимальная температура днем
            var windSpeed = listDate[0].props.children.parts.day.wind_speed; //Скорость ветра
            var windGust = listDate[0].props.children.parts.day.wind_gust; //Скорость порыва ветра
            var pressure = listDate[0].props.children.parts.day.pressure_mm; //Давление
        }     
        
        // var date = new Date();
        // var timeHours = date.getHours();
        // var timeMinutes = date.getMinutes();
        // console.log(timeMinutes)

        return (
            <div> 
                <div className="preloader" className={this.props.isFetching ? 'preloader_hidden' : 'preloader_active'}>
                    Loading...
                </div>
                <div className="WeatherComponent" className={this.props.isFetching ? 'WeatherComponent_loaded' : 'WeatherComponent_loading'}>
                    <ul>
                        <li>Дата: {dateToday}</li>      
                        <li>Город: {location}</li>
                        <li>Сейчас: {temperatureNow}</li>
                        <li>Ощущяется как: {temperatureFells}</li>
                        <li>Минимальная температура: {temperatureDayMin}</li>
                        <li>Максимальная температура: {temperatureDayMax}</li>
                        <li>Скорость ветра: {windSpeed}</li>
                        <li>Скорость порыва ветра: {windGust}</li>
                        <li>Давление: {pressure}</li>
                        <li>Осадки: <img src={iconPrecipitation} width="50px" height="50px"/></li>    
                    </ul>
                </div>
            </div>
            
        )
    }
};

const mapStateToProps = (state,ownProps={}) => ({
    isFetching: state.mainReducer.isFetching,
    city: state.mainReducer.city
});

const mapDispatchToProps = {
    getWeather: actionGetWeather
};

const Weather = connect (
    mapStateToProps,
    mapDispatchToProps
)(WeatherComponent);

export default Weather;