const dbObj = require("./Database_Module/mysql");
var dbConnectionObj = require("./Database_Module/mysql");
dbConnectionObj.createDatabase();
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var http = require('http');
var server = http.createServer(app);
var httpPort = 7081;
server.listen(httpPort);

var userServicesObj = require("./User_Module/services");
var messageServicesObj = require("./Messages_Module/services");

app.post('/login', function (req, res) {
    let response = userServicesObj.login(req.body);
    res.send(response);
});
app.post('/addUser', function(req, res) {
    let response = userServicesObj.addUser(req.body);
    res.send(response);
});
app.post('/insertMsg', function(req, res) {
    let response = messageServicesObj.insertMessage(req.body);
    res.send(response);
});
app.get('/getMsgs', function(req, res) {
    let response = messageServicesObj.getMessages();
    res.send(response);
});