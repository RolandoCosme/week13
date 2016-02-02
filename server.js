var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;
var good = ["awesome","cool", "bro"];
var bad = ["not awesome","not cool", "not bro"];
var randGood = good[Math.floor(Math.random() * good.length)];
var randBad = bad[Math.floor(Math.random() * bad.length)];

var server1 = http.createServer( function (req, res) {
   res.end (randGood);
});

server1.listen ( PORT1, function () {
  console.log( "server is listening at http://lolcalhost:%s", PORT1);
});

var server2 = http.createServer( function (req, res) {
  res.end (randBad);
});

server2.listen ( PORT2, function () {
  console.log( "server is listening at http://lolcalhost:%s", PORT2);
});

//localhost:8080

// Create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// ** Bonus **

// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!