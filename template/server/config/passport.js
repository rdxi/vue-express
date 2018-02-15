// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var User       		= require('../app/models/user').User;
//var Bookshelf = require('../lbookshelfjs');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
      console.log(id);
      User.forge({id:id}).fetch().then(function( user){
        //User.findById(id, function(err, user) {
            done(null,user.toJSON());
        });
    });

 	// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
    User.where('email', email).fetch().then(function( user){
            // if there are any errors, return the error
          //  if (err)
            //    return done(err);
             // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

				// if there is no user with that email
                // create the user

                // set the user's local credentials
              User.forge({
                role_id:1,
                   name: email,
                   email: email,
                   password:new User().generateHash(password) // use the generateHash function in our user model
                 })
                				// save the user
                .save().then(function(user) {
                    if (!user){
                      console.log('user creattion failed:', JSON.stringify(user));
                    }
                        //throw err;

                    return done(null, user);
                });
            }

        });

    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        console.log(email,password);
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already ;qexists
        User.where('email', email).fetch().then(function( user) {
            // if there are any errors, return the error before anything else
            /*if (err)
                return done(err);
                */
            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flas

            // if the user is found but the password is wrong
            if (!(user.validPassword(password)))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is                            v  v v v    , return successful user
            return done(null, user);//.toJSON());
        });

    }));

};
