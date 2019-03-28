var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

const PORT=8080;

console.log(path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.listen(PORT);
