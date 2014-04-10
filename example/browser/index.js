
/**
 * Module dependencies.
 */

var express = require('express');
var WPCONN = require('../../');

/**
 * wpcon app data
 */

var wpapp = require('../../test/data');

/**
 * Create a WPCONN instance
 */

var wpconn = WPCONN(wpapp.token);

var pub = __dirname + '/public';
var app = express();

app.use(express.static(pub));
app.set('views', __dirname + '/');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('layout');
});

app.get('/data', function(req, res){
  res.send({ token: wpconn.tkn, site: wpapp.public_site });
});

app.listen(3000);
console.log('WPConn app started on port 3000');
