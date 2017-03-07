var Twitter = require('twitter');
var fs = require ('fs');
var server = require('./index');
var client = new Twitter({
  consumer_key: '1E04M7YyXM3QRE2MbTb4t1fYZ',
  consumer_secret: 'gWNMzAnZUhhXhnMwRpAcHowb2nrGTeRofZ2urgQHqKAWwH56c6',
  access_token_key: '798613288271704064-2d11zgrr0jmYEQ8QJCTtTRBzMGzyBuT',
  access_token_secret: '2rSW8fbTzUrx39EWOZ6xbb5MZHhujmhBWjJWrv2OQmVEn'
});

var params = {screen_name: 'margo_drozd'};

// var querysearch = require('/');
var query = 'body';

module.exports.getTimeLine = function (callback) {
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    callback(error, tweets);
  });

};

module.exports.getFavorites = function (callback) {
  client.get('favorites/list', function(error, tweets, response) {
    callback(error, tweets);

  });
};

module.exports.getSearch = function (callback ) {
  // console.log(ServerResponse);
  // console.log(req);
  // var searchquery = req.body.query;
  // var encsearchquery = encodeURIComponent(searchquery);
  //var query = querysearch;
// console.log(query);

  client.get('search/tweets', {q: query}, function(error, tweets, response, request) {
    // console.log(request);
    callback(error, tweets);
    // console.log(query);
  });

};

module.exports.postTweet = function (callback) {
  var status ="text"
  client.post('statuses/update' + status,  function(error, tweet, response) {
    callback(error, tweet);
  });
};

// client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });
