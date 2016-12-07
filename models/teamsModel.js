var mongoose = require('mongoose');


var teamsSchema = new mongoose.Schema({
 teamName: {type: String},
 mainDescription: {type: String},
 clubAge: {type: String},
 logo: {type: String},
 website: {types: String},
 createdBy: {type: String}

});

module.exports = mongoose.model("Teams", teamsSchema);
