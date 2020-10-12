var http=require('http');
var express=require('express');

var port=45678;

var app=express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log("Listening on port "+port);
});
