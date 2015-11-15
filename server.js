/**
 * Module dependencies
 */

var subdomain = require('subdomain'),
  http = require('http'),
  express = require('express'),
  path = require('path');

var app = express(),
      resume = require('gn-resume'),
      teaching = require('gn-teaching'),
      heart = require('gn-about-me'),
	  books = require('gn-booklist'),
      home = require('./app');


var base_url = 'localhost.com:3000';

if(process.env.NODE_ENV === 'development') {
  base_url = 'localhost.com:3000';
}

if(process.env.NODE_ENV === 'production') {
  base_url = 'georgenishimura.com'
}

app.set('port', process.env.PORT || 3000);
// development only

app.use(subdomain({ base : base_url, removeWWW : true, debug:true, domains:['resume','blog'] }));

var router = express.Router({
    strict       : app.get('strict routing')
});

app.use(router);

router.use('/resume', resume);
router.use('/heart', heart);
router.use('/teaching', teaching);
router.use('/books', books);
router.use('/', home);
/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
