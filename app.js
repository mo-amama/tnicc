var express = require('express');
var   app     = express();
var request = require('request');
const fs = require("fs");
var    bodyParser = require('body-parser');
var    mongoose   = require('mongoose');
var    os = require('os');
var    hostname = os.hostname(); 
var path = require('path');  
require('./db/mongoose');
const errorHandler = require('./_helper/error-handler');
var router = express.Router();
var path = __dirname + '/public/';

app.use(errorHandler);
app.use("/",router);

app.use(bodyParser.urlencoded({ extended: true,limit: '100mb' })); 
app.use(bodyParser.json({limit: '50mb'}));
app.use(function(req, res, next) { 
res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
 });
 

var port = process.env.PORT || 8081;


//All artisan routers
//var indexRouter = require('./routes');




//landing page static files 
 app.use('/public/assets/', express.static(__dirname + '/public/assets/'));
 app.use('/public/assets/ldn/', express.static(__dirname + '/public/assets/ldn/'));
 app.use('/public/assets/ldn/css/', express.static(__dirname + '/public/assets/ldn/css/'));
 app.use('/public/assets/ldn/css/magnific-popup/', express.static(__dirname + '/public/assets/ldn/css/magnific-popup/'));
 app.use('/public/assets/ldn/css/mega-menu/', express.static(__dirname + '/public/assets/ldn/css/mega-menu/'));
 app.use('/public/assets/ldn/css/owl-carousel/', express.static(__dirname + '/public/assets/ldn/css/owl-carousel/'));
 app.use('/public/assets/ldn/css/skills-graph/', express.static(__dirname + '/public/assets/ldn/css/skills-graph/'));
 app.use('/public/assets/ldn/css/skins/', express.static(__dirname + '/public/assets/ldn/css/skins/'));
 app.use('/public/assets/ldn/images/', express.static(__dirname + '/public/assets/ldn/images/'));
 app.use('/public/assets/ldn/images/thumbnail/', express.static(__dirname + '/public/assets/ldn/images/thumbnail/'));
 app.use('/public/assets/ldn/fonts/', express.static(__dirname + '/public/assets/ldn/fonts/'));
 app.use('/public/assets/ldn/js/', express.static(__dirname + '/public/assets/ldn/js/'));








router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });
  router.get("/admin",function(req,res){
    res.sendFile(path + "auth-login.html");
  });
  router.get("/forgotpwd",function(req,res){
    res.sendFile(path + "auth-forgot-password.html");
  });
  router.get("/admin/dashboard",function(req,res){
    res.sendFile(path + "dashboard.html");
  });
  router.get("/pwdreset",function(req,res){
    res.sendFile(path + "auth-reset.html");
  });

  app.use('/dept/admin/tni/auth', require('./route/Authentication')); 
  app.use('/dept/admin/tni/distributor', require('./route/Distributor')); 
  app.use('/dept/admin/tni/user', require('./route/User')); 
  app.use('/dept/admin/tni/distributions', require('./route/Distribution')); 
  app.use('/dept/admin/tni/team', require('./route/Team')); 
  app.use('/dept/admin/tni/language', require('./route/Language')); 
  app.use('/dept/admin/tni/download', require('./route/Download')); 
  app.use('/dept/admin/tni/translation', require('./route/Translation')); 
 //mapping for frontend views

app.listen(port,() => {
    console.log(`Server running at port `+port);
    });

console.log('nodejs server running on '+ port);

module.exports = app;
