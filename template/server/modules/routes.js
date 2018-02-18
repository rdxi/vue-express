
var path = require('path');

let axios=require('axios');
/*
let { Nuxt, Builder } = require('nuxt');

// Launch nuxt build with given options
let nconfig = require('./nuxt.config.js')
let nuxt = new Nuxt(nconfig)
nconfig.dev = !(process.env.NODE_ENV === 'production');
*/
// =====================================
module.exports = function(app, passport) {
  app.set('views', path.join(__dirname, '../views'));

  	// =====================================
  	// HOME PAGE (with login links) ========

    app.get('/', function (req, res) {
      res.render('index.ejs', { title: 'vue-express starter' });
    });
  	// =====================================
  	// LOGIN ===============================
  	// =====================================
  	// show the login form
    app.get('/login', function(req, res) {

  		// render the page and pass in any flash data if it exists
  		res.render('login.ejs', { message: req.flash('loginMessage') });
  	});
  	// process the login form
    app.post('/login', passport.authenticate('local-login', {
  		successRedirect : '/profile', // redirect to the secure profile section
  		failureRedirect : '/login', // redirect back to the signup page if there is an error
  		failureFlash : true // allow flash messages
  	}));

  	// =====================================
  	// SIGNUP ==============================
  	// =====================================
  	// show the signup form
  	app.get('/signup', function(req, res) {

  		// render the page and pass in any flash data if it exists
  		res.render('signup.ejs', { message: req.flash('signupMessage') });
  	});

  	// process the signup form
  	app.post('/signup', passport.authenticate('local-signup', {
  		successRedirect : '/profile', // redirect to the secure profile section
  		failureRedirect : '/signup', // redirect back to the signup page if there is an error
  		failureFlash : true // allow flash messages
  	}));


  	// =====================================
  	// PROFILE SECTION =========================
  	// =====================================
  	// we will want this protected so you have to be logged in to visit
  	// we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
  		res.render('profile.ejs', {
  			user : req.user // get the user out of session and pass to template
  		});
  	});
      	// =====================================
      	// AXIOS API RESP SECTION =========================0
      	// =====================================

        app.post('/loginvue', passport.authenticate('local-login', {
          successRedirect : '/profilevue', // redirect to the secure profile section
          failureRedirect : '/loginvue', // redirect back to the signup page if there is an error
          failureFlash : false // allow flash messages
        }));

              app.post('/profilevue', isLoggedIn, function(req, res) {
          		res.send({found:true,user : req.user,path:'/vueprofile' });// get the user out of session and pass to template
          	});
            app.post('/loginvue', isLoggedIn, function(req, res) {
            res.send({found:false,user : req.user,path:'/vuelogin' });// get the user out of session and pass to template
          	});
      app.get('/profilevue', function(req, res) {
        res.send({found:true,user : req.user,path:'/vueprofile' });// get the user out of session and pass to template
  	});
    app.get('/loginvue', function(req, res) {
    	res.send({found:false,user : req.user,path:'/vuelogin' });// get the user out of session and pass to template
  	});
    app.post('/isLoggedIn',  function(req, res) {
    	res.send({isLoggedIn:(req.user && req.isAuthenticated())?1:0 });// get the user out of session and pass to template
  	});
  
    app.post('/getLoggedInUser', isLoggedIn, function(req, res) {

      		res.send({user:req.user });// get the user out of session and pass to template
      	});

    // =====================================
  	// =====================================
  	app.post('/logoutvue', function(req, res) {
  		req.logout();
  	});
    // =====================================
  	// LOGOUT ==============================
  	// =====================================
  	app.get('/logout', function(req, res) {
  		req.logout();
  		res.redirect('/');
  	});


  // route middleware to make sure
  function isLoggedIn(req, res, next) {

  	// if user is authenticated in the session, carry on
  	if (req.isAuthenticated())
  		return next();

  	// if they aren't redirect them to the home page
  	res.redirect('/');
  }


app.get('/example-server-route', function (req, res) {
  res.render('example-server-route.ejs', { title: 'example server route', message: 'hello!' });
});

app.get('*', function (req, res) {
  res.status(404).render('404.ejs', {title: '404'});
});
}
