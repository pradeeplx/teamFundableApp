var mongoose = require('mongoose');


var fundraisersSchema = new mongoose.Schema({
 name: {type: String},
 mainDescription: {type: String},
 dateCreated: {type: String},
 goal: {type: Number},
 image: {type: String},
 isMatched: {type: Boolean},
 createdBy: {type: String},
 status: {type: String}

});

module.exports = mongoose.model("Fundraisers", fundraisersSchema);
