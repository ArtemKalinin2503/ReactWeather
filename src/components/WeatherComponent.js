import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import store from '../store';
import { actionGetWeather} from '../action'

class WeatherComponent extends Component {

    componentDidMount() {
        this.props.getWeather();   
    };

    render() { 
        if(this.props.isFetching) {
            console.log(this.props.city);
        }     
        return (
            <div className="component">
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