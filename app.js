var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var functions = require('./twit');
var twitter = require('./twit');
//var router = require('./router');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());



app.post("/search", function (req, res) {
  console.log(req);

  twitter.getSearch(function (error, tweets) {

    res.json({
      data: tweets

    });

  });
});
app.get("/search", function (req, res) {
  //console.log(req);

  twitter.getSearch(function (error, tweets) {
    //
    // res.json({
    //   data: tweets
    //
    // });

  });
});
app.post("/favorites", function (req, res) {
  twitter.getFavorites(function (error, tweets) {
    res.json({
      data: tweets
    });
  });
});


app.post("/update", function (req, res) {
  twitter.postTweet(function (error, tweet) {
    res.json({
      data: tweet
    });
  });
});

app.listen(3000);
