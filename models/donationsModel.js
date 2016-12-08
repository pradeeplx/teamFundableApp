var mongoose = require('mongoose');


var donationsSchema = new mongoose.Schema({
	matchId: {type: String},
	userId: {type: String},
	amount: {type: Number},
	cardNumber: {type: String},
	cardExpiration: {type: Date},
	secuirtyCode: {type: String},
	cardholderName: {type: String},
	zipCode: {type: String}

});

module.exports = mongoose.model("Donations", donationsSchema);
