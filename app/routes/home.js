var request = require('request');
var app_env = process.env['APP_ENV'];
var apiUrl;

switch (app_env) {
  case "local":
    apiUrl = "http://alejandro:3001/";
    console.log("alejandro:3001 config");
    break;
  default:
    apiUrl = "https://guarded-scrubland-78590.herokuapp.com/";
    console.log("production config");
}

exports.home = function(req, res){
  res.render('home', {api: apiUrl});
};
