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
            console.log(this.props.isFetching)
            console.log(this.props.city);
            var listDate = this.props.city.forecasts.map(function(data) {
                return (
                    <h1>{data.date} </h1>
                );
            });
        }     
        return (
            <div className="component">
                {listDate}
                {this.props.city.now_dt}
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