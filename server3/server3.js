var express = require('express');
var app = express();
var session = require('express-session');
var PORT = 3000; 

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

// var maxAge = 

// Access the session as req.session 
app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

app.listen(PORT, function(err){
    console.log('Express server is listening on Port ' + PORT);
})