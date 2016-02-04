var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + "/links/login.html");
});

app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + "/links/help.html");
});

app.get('/account', function(req, res) {
  res.sendFile(process.cwd() + "/links/account.html");
});

app.get("/home", function(req, res) {
  res.sendFile(process.cwd() + "/links/home.html");
});

app.post("/login", function(req, res) {
  console.log(req.body);
  var myHTML = "<h1>Email: " + req.body.email + "</h1>";
  myHTML += "<h1>Password: " + req.body.password + "</h1>";

  res.redirect('/help');
});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});