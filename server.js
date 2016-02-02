var http = require('http');
var Twitter = require('twitter');

var PORT1 = 7000;
var PORT2 = 7500;
var good = ["awesome","cool", "bro"];
var bad = ["not awesome","not cool", "not bro"];
var randGood = good[Math.floor(Math.random() * good.length)];
var randBad = bad[Math.floor(Math.random() * bad.length)];

var server1 = http.createServer( function (req, res) {
   res.end (getTweets);
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

function getTweets(){
  //var client = new Twitter(Keys);
  var client = new Twitter({
    consumer_key: 'KqkB0kmAhHDQq7dnRX2rHtSla',
    consumer_secret: 'iOi3bKl35Gttm0LIfGkWbxovZ8KezZ5u1Kmjk9gvD4q9Ou9U3l',
    access_token_key: '171743975-ZhAn6RrPE9rqcxkjc9wmlsoUltySJfinonr3al7n',
    access_token_secret: 'eBqS3q5b1z7sP1gOUXHvdvXm183xE0Cw8mErvm1JbCT6K',
  });
   
  var params = {screen_name: 'RolandoCosme'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      for (var i = 0; i < 2; i++) {
        console.log(tweets[i].text);
        };
    }
    else {
      console.log(error);
    };
  });
};

//localhost:8080

// Create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// ** Bonus **

// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!