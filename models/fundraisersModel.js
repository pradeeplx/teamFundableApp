var mongoose = require('mongoose');


var fundraisersSchema = new mongoose.Schema({
 name: {type: String},
 mainDescription: {type: String},
 dateCreated: {type: String},
 estimatedLabor: {type: String},
 estimatedCost: {type: String},
 dropDate: {type: Date},
 image: {type: String},
 isMatched: {type: Boolean}

});

module.exports = mongoose.model("Fundraisers", fundraisersSchema);
