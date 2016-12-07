var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');//allows the hashes on our passwords


var userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  nameFirst: {type: String},
  nameLast: {type: String},
  company: {type: String},
  type: {type: String},
  teamName: {type: String},
  companyName: {type: String}



});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Users", userSchema);
