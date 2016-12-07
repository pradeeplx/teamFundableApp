var mongoose = require('mongoose');


var matchesSchema = new mongoose.Schema({
	fundraiserId: {type: String},
	projectIdId: {type: String},
	status: {type: Boolean}

});

module.exports = mongoose.model("Matches", matchesSchema);
