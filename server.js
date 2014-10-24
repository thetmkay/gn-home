/**
 * Module dependencies
 */

var subdomain = require('subdomain'),
  http = require('http'),
  path = require('path');

var app = require('./app'),
      resume = require('resume/app');

// development only
// app.use(subdomain({ base : 'localhost', removeWWW : true }));
// app.get('/subdomain/resume/', resume);
app.use('/resume', resume);

/**
 * Start Server
 */

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
