"use strict";

var express = require('express');

var app = express();

app.get('/', function (req, res) {
   res.send('It Works!');
});

var PORT = (process.env.PORT) ? process.env.PORT : 3000;

app.listen(PORT, function () {
    console.log('app is listening on port '+PORT);
});