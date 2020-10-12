var http=require('http');
var express=require('express');

var port=45678;

var app=express();

/* Import de ejs */
app.set('view engine', 'ejs');

/* Prise en compte du dossier assets comme dossier statique */
app.use('/assets', express.static('assets'));

/* Route / */
app.get('/', function (req, res) {
  res.render('index');
});

/* Route /articlesList */
app.get('/articlesList', function (req, res) {
  res.render('index');
});

app.listen(port, function () {
  console.log("Listening on port "+port);
});
