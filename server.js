var http = require('http');

var port = 8080;


var server = http.createServer( function (req, res) {
  res.end ("it worked! you hit:" + req.url);
});



server.listen (PORT, function () {
  console.log( "server is listening at http://lolcalhost:%s", PORT);
});




//localhost:8080