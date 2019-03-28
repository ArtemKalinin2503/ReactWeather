import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; 
import './App.css';
import store from "./store";
import WeatherComponent from './components/WeatherComponent';
import { actionChangeCity } from './action';

//Основной компонент 
class App extends Component {

  handleSearchCity= () => {
    let inputNameCity = this.refs.inputName.value;
  };

  render() {
    return (
      <div className="App">
        <header></header>
          <div className="main">
            <h1>Введите название города:</h1>
            <input type="text" placeholder="Город" className="input-city" ref="inputName"/>
            <button className="btn-search" onClick={this.handleSearchCity}>поиск</button>
            <WeatherComponent />
          </div>
        <footer></footer>
      </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);

