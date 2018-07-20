const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.use('/', (req, res) => {
    console.log('Backend Server In Url : ', req.url);
})

module.exports = app;


