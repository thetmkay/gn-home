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
    res.redirect('http://commenttree.eu01.aws.af.cm/');
  })

