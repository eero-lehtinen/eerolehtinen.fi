#!/usr/bin/env node
var express = require('express');
var app = express();

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
    res.end();
});

app.get('/*', function (req, res) {
    res.send(404, "page " + req.path + " not found on lehtineneero.com");
    res.end();
});

var server = app.listen(8080, function () {});