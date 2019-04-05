import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; 
import './App.css';
import store from "./store";
import Weather from './components/WeatherComponent';

//Основной компонент 
class App extends Component {

  render() {
    return (
      <div className="App">
        <header></header>
          <div className="main">
            <Weather />
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

