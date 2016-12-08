var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");



var userCtrl = require("./controllers/userCtrl.js");
var fundraisersCtrl = require("./controllers/fundraisersCtrl.js");
var matchesCtrl = require("./controllers/matchesCtrl.js");
var projectsCtrl = require("./controllers/projectsCtrl.js");
var teamsCtrl = require("./controllers/teamsCtrl.js");
var donationsCtrl = require("./controllers/donationsCtrl.js");



var config = require('./config/config');


var app = express();

require('./config/passport.js')(passport);//auto invoking the passport file


app.use(session(config));//set up the session here
app.use(passport.initialize());//initalize the passport package
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/login', passport.authenticate('local-signup'), userCtrl.login)//endpoint for login and signup
app.post('/logout', userCtrl.logout);
app.get('/current', userCtrl.getMe);
app.put('/current/:id', userCtrl.change);

app.get("/fundraisers", fundraisersCtrl.read);
app.post("/fundraisers", fundraisersCtrl.create);
app.put("/fundraisers/:id", fundraisersCtrl.change);
app.delete("/fundraisers/:id", fundraisersCtrl.destroy);

app.get("/matches", matchesCtrl.read);
app.post("/matches", matchesCtrl.create);
app.put("/matches/:id", matchesCtrl.change);
app.delete("/matches/:id", matchesCtrl.destroy);

app.get("/projects", projectsCtrl.read);
app.post("/projects", projectsCtrl.create);
app.put("/projects/:id", projectsCtrl.change);
app.delete("/projects/:id", projectsCtrl.destroy);

app.get("/teams", teamsCtrl.read);
app.post("/teams", teamsCtrl.create);
app.put("/teams/:id", teamsCtrl.change);
app.delete("/teams/:id", teamsCtrl.destroy);

app.get("/donations", donationsCtrl.read);
app.post("/donations", donationsCtrl.create);
app.put("/donations/:id", donationsCtrl.change);
app.delete("/donations/:id", donationsCtrl.destroy);


mongoose.connect("mongodb://localhost: 27017/teamfundable");
mongoose.connection.once('open', function(){
  console.log("conncected to teamFundable db on 27017");
})

app.listen(8000, function(){
  console.log("We are connected to teamFundable on  8000");
})
