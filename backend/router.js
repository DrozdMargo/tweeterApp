var Twitter = require('twitter');
var express = require('express');
// var router = express.Router();
var path = require('path');

var client = new Twitter({
  consumer_key: '1E04M7YyXM3QRE2MbTb4t1fYZ',
  consumer_secret: 'gWNMzAnZUhhXhnMwRpAcHowb2nrGTeRofZ2urgQHqKAWwH56c6',
  access_token_key: '798613288271704064-2d11zgrr0jmYEQ8QJCTtTRBzMGzyBuT',
  access_token_secret: '2rSW8fbTzUrx39EWOZ6xbb5MZHhujmhBWjJWrv2OQmVEn'
});

var params = {screen_name: 'margo_drozd'};



functions = {
  authorize: function(req, res) {

      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
          return tweets;
        }
      });

  },

  search: function(req, res) {

    client.get('favorites/list', function(error, tweets, response) {
      if(error) throw error;
      console.log(tweets);  // The favorites.
      return tweets;
    });
  }


}
console.log(search.tweets);
module.exports = functions;

