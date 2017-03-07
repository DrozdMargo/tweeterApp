var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var functions = require('./twit');
 var twitter = require('./twit');
//var router = require('./router');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());



app.post("/post", function (req, res) {
  twitter.getTimeLine(function (error, tweets) {
      res.json({
        data: tweets
      });
  });
});

//
// app.post('/search',  require('./router.js'));
// app.get('/user',  require('./router.js'));


// app.post('/search', functions.search);


app.listen(3000);


// var express = require('express');
// var app = express();
//
// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// });
// app.listen(3000);
