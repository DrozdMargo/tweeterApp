var Twitter = require('twitter');
var fs = require ('fs');

var client = new Twitter({
  consumer_key: '1E04M7YyXM3QRE2MbTb4t1fYZ',
  consumer_secret: 'gWNMzAnZUhhXhnMwRpAcHowb2nrGTeRofZ2urgQHqKAWwH56c6',
  access_token_key: '798613288271704064-2d11zgrr0jmYEQ8QJCTtTRBzMGzyBuT',
  access_token_secret: '2rSW8fbTzUrx39EWOZ6xbb5MZHhujmhBWjJWrv2OQmVEn'
});

var params = {screen_name: 'margo_drozd'};


module.exports.getTimeLine = function (callback) {
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
      callback(error, tweets);
  });
};
//
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//   // console.log(tweets);
//
//     // fs.writeFile( "tweets_time.json", JSON.stringify( tweets ), "utf8",function(err) {
//     //   if(err) {
//     //     return console.log(err);
//     //   }
//     //
//     //   console.log("The file was saved!");
//     // } );
//
//   }
// });
// client.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//
//   fs.writeFile( "tweets_favorits.json", JSON.stringify( tweets ), "utf8",function(err) {
//     if(err) {
//       return console.log(err);
//     }
//
//     // console.log("The file was saved!");
//   } );
//
//
// });

// client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });
