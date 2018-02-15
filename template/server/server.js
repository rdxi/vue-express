var port = process.env.PORT || 3000;
var http = require('http');
var express = require('express');
var compression = require('compression');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./modules/api.js');
const session = require('express-session')
var passport = require('passport');
require('./config/passport')(passport); // pass passport for configuration

const flash = require('express-flash')
var Bookshelf = require('./lbookshelfjs');
const history = require('connect-history-api-fallback');
const app = express();
  app.use(compression());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
  app.use(session({
    secret: process.env.SECRET || '12345687987',
    saveUninitialized: true,
    resave: false
}))

	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions

	app.use(flash()); // use connect-flash for flash messages stored in session
// routes ======================================================================

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(api);
var routes = require('./modules/routes.js')(app, passport);

const staticFileMiddleware = express.static(__dirname);
//needed
app.use(staticFileMiddleware);
app.use(history({
  verbose: true,
  disableDotRule: true

}));
//needed twice
 app.use(staticFileMiddleware);

// launch ======================================================================
var server = http.createServer(app);
server.listen(port);
console.log('Server is running at localhost:' + port);
