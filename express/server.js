//Подключим express
var express = require('express');  //npm i express (сервер)
var cors = require('cors'); //npm i cors (для кроссдоменных запросов)
var bodyParser = require('body-parser');
const axios = require('axios');

{/*Работа с Mongoose*/}

//Вызов сервера express
var app = express();
//Используем cors для кроссдоменных запросов
app.use(cors());

//Преобразуем данные из БД в Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Метод get будет выводить данные из БД
app.get('/weather', function(req, res){
    axios({
        url: 'https://api.weather.yandex.ru/v1/forecast?lang=ru_RU',
        method: 'get',
        headers: {
            'X-Yandex-API-Key': '88060699-4388-43d5-bbbf-84b6297197ef',
            'Content-Type': 'application/json'
        }
     })
     .then(response => {
        res.json(response.data)
        console.log(response)
     }) 
     .catch(err => {
        console.log(err);
     });
    
  });
  
app.listen(3012, function() {
    console.log('Api app started')
});

//Команда для запуска сервера node server.js
//Ссылка на проект http://localhost:3012/