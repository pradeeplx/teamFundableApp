var mongoose = require('mongoose');


var matchesSchema = new mongoose.Schema({
	status: {type: String},
	projectId: {type: String},
	projectName: {type: String},
	projectMainDescription: {type: String},
	projectDropDate: {type: Date},
	projectImage: {type: String},
	projectCreatedBy: {type: String},
	fundraiserId: {type: String},
	fundraiserName: {type: String},
	fundraiserMainDescription: {type: String},
	fundraiserGoal: {type: Number},
	fundraiserImage: {type: String},
	teamName: {type: String},
	teamMainDescription: {type: String},
	teamClubAge: {type: String},
	teamLogo: {type: String},
	amountFunded: {type: Number}

});

module.exports = mongoose.model("Matches", matchesSchema);
