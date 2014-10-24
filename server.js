/**
 * Module dependencies
 */

var subdomain = require('subdomain'),
  http = require('http'),
  express = require('express'),
  path = require('path');

var app = express(),
      resume = require('resume'),
      home = require('./app');


var base_url;

if(process.env.NODE_ENV === 'development') {
  base_url = 'localhost.com:3000';
}

if(process.env.NODE_ENV === 'production') {
  base_url = 'georgenishimura.com'
}

app.set('port', process.env.PORT || 3000);

// development only

app.use(subdomain({ base : base_url, removeWWW : true, debug:true, domains:['resume'] }));
// app.get('/subdomain/*', function(req,res,next) {
//   console.log('subdomain');
//   next();
// });
app.use('/resume', resume);
app.use('/', home);
/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
