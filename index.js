require('dotenv').config();
const request = require('request');
const express = require('express');
const argv = require('yargs').argv;

const app = express();
const port = process.env.PORT || 8080;

let apiKey = process.env.API_KEY;
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
