// Import
// import express from 'express';
var express = require('express')
var apiRouter = require('./apiRouter').router

var server = express()

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>On my server</h1>');
});

server.use('/api/', apiRouter);

server.listen(8080, function () {
    console.log('Server was running');
});