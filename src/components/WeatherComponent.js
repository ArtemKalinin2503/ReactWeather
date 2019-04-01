import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import store from '../store';
import { actionGetWeather } from '../action'

class MainComponent extends Component {

    componentDidMount() {
        this.props.getWeather();
        store.getState();
    };

    render() {
        return (
            <div className="component">
                Второстипенный компонент
            </div>
        )
    }
};

const mapStateToProps = (state,ownProps={}) => ({
    city: state.mainReducer.city
});

const mapDispatchToProps = {
    getWeather: actionGetWeather
};

const ComponentMain = connect (
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default ComponentMain;