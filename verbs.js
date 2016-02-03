
var http = require('http');

var PORT = 8090;

var server = http.createServer(function(req, res) {
  var method = req.method.toLowerCase();
  var requestData = '';

  req.on("data", function(msg) {
    requestData += msg;
  });

  req.on("end", function() {
    res.end("You just " + method + "\n" + requestData);
  });
});

server.listen(PORT, function() {
  console.log("Server listening on http://localhost:%s", PORT);
});