var http = require('http');
var express = require('express');
var mysql = require('mysql');

/* Définition du port */
var port = 45678;

/* Connexion à la base de données */
var connect1 = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "techno-js",
    "port": "3306"
});

/* Tentative de connexion à la base de données */
connect1.connect(function (error) {
    if (error) {
        console.log("Problem with MySQL : " + error);
    } else {
        console.log("Connection to database OK...");
    }
});

var app = express();

/* Import de ejs */
app.set('view engine', 'ejs');

/* Prise en compte du dossier assets comme dossier statique */
app.use('/assets', express.static('assets'));

/* Routes */
app.get('/', function (req, res) {
    res.render('index');
    console.log("index page loaded")
})

    .get('/articlesList', function (req, res) {
        connect1.query("SELECT * FROM articles",
            function (error, rows) {
                if (error) {
                    console.log("Problem with MySQL : " + error);
                    connect1.end();
                } else {
                    res.end(JSON.stringify(rows));
                    console.log("articlesList page loaded")
                }
            });
    });

app.listen(port, function () {
    console.log("Listening on port " + port);
});
