/**
 * Module dependencies
 */

  var express = require('express'),
    http = require('http'),
    path = require('path'),
    cons = require('consolidate'),
	footer = require('gn-components/footer'),
    nunjucks = require('nunjucks');

  var app = module.exports = express();


  /**
   * Configuration
   */
  var view_paths = [
    path.join(__dirname,'views'),
	footer.views
  ];

  var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(view_paths));

  env.express(app);

  // all environments
  app.engine('html', cons.nunjucks);
  app.set('view engine', 'html');
  app.use(function(req,res,next){
		console.log(req.url);
		next();
  });
  app.use(express.static(path.join(__dirname, 'public')));
  // app.use(app.router);

  var footer = require('./json/footer');
  var topics = require('./json/topics');

  app.get('/', function(req,res) {
    res.render('index',{topics: topics["topics"].slice(0,11)});
  });


  app.get('/commenttree', function(req,res) {
    res.redirect('http://www3.imperial.ac.uk/computing/teaching/ug/webapps-distinguished-projects');
  });

  app.get('/subbr', function(req,res) {
    res.redirect('https://twitter.com/subbrapp');
  });


