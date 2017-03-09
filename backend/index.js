var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var functions = require('./twit');
 //var twitter = require('./twit');
//var router = require('./router');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '1E04M7YyXM3QRE2MbTb4t1fYZ',
  consumer_secret: 'gWNMzAnZUhhXhnMwRpAcHowb2nrGTeRofZ2urgQHqKAWwH56c6',
  access_token_key: '798613288271704064-2d11zgrr0jmYEQ8QJCTtTRBzMGzyBuT',
  access_token_secret: '2rSW8fbTzUrx39EWOZ6xbb5MZHhujmhBWjJWrv2OQmVEn'
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post("/search", function ( req, res) {

  client.get('search/tweets', {q: req.body.query}, function (error, tweets) {
    res.json({
      data: tweets

    });
  });
});
app.post("/favorites", function (req, res) {
  client.get('favorites/list',  function (error, tweets) {
    res.json({
      data: tweets

    });
  });
});


app.post("/update", function (req, res) {

  client.post('statuses/update', {status: req.body.status}, function (error, tweets) {
    res.json({
      data: tweets
    });
  });
});

app.post("/timeline", function (req, res) {

  client.get('statuses/user_timeline', {screen_name: req.body.name}, function (error, tweets) {
    res.json({
      data: tweets
    });
  });
});

app.listen(3000);


