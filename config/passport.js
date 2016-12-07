var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./../models/usersModel.js');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        console.log("USER", user);
        done(null, user.id);
    }); //seraialize the user object, passport stores ubfirnatuib regardubg this user object

    passport.deserializeUser(function(id, done) {
        console.log("ID", id);
        UserModel.findById(id, function(err, user) {
            done(err, user);
        })
    }); //deserializing the user object after it has been serailzed into a language that passport can understand

    passport.use('local-signup',
        new LocalStrategy({
                usernameField: 'email', //if you wanted username, you may change the alue to be username
                passwordField: 'password',
                passReqToCallback: true
            },
            function(req, email, password, done) {
                process.nextTick(function() {
                    UserModel.findOne({
                        'email': email
                    }, function(err, user) {
                        if (err) return done(err); //if broken remove brackets
                        if (user) {
                            if (user.validPassword(password)) {
                                console.log("Password Verified. Log em in");
                                return done(null, user);
                            } else {
                                console.log("password rejected, Take a hike");
                                return done(null, false);
                            }
                        } else {
                            var newUser = new UserModel(req.body);
                            newUser.email = email;
                            newUser.password = newUser.generateHash(password);
                            newUser.save(function(err) {
                                if (err) throw err;
                                return done(null, newUser);
                            });
                        }
                    });
                });
            }));
};
