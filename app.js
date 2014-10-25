/**
 * Module dependencies
 */

  var express = require('express'),
    http = require('http'),
    path = require('path'),
    cons = require('consolidate');

  var app = module.exports = express();


  /**
   * Configuration
   */

  // all environments
  app.engine('html', cons.nunjucks);
  app.set('view engine', 'html');
  app.use(express.static(path.join(__dirname, 'public')));
  // app.use(app.router);

  app.get('/', function(req,res) {
    res.render('index');
  });


  app.get('/commenttree', function(req,res) {
    res.redirect('http://www3.imperial.ac.uk/computing/teaching/ug/webapps-distinguished-projects');
  });

  app.get('/subbr', function(req,res) {
    res.redirect('https://twitter.com/subbrapp');
  });
