import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import store from '../store';

class MainComponent extends Component {

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

};

const ComponentMain = connect (
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default ComponentMain;