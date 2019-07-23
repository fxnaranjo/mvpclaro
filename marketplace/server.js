var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');

var path = require("path");

app.use('/assets',express.static(__dirname + '/public/assets'));
app.use('/images',express.static(__dirname + '/public/images'));

app.use('/',express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/route/routes'); //importing route
routes(app); //register the route


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);