var mongoose = require('mongoose');
var projectsSchema = new mongoose.Schema({
 name: {type: String},
 mainDescription: {type: String},
 dateCreated: {type: String},
 estimatedLabor: {type: String},
 estimatedCost: {type: String},
 dropDate: {type: Date},
 image: {type: String},
 isMatched: {type: Boolean},
 status: {type: String},
 createdBy: {type: String}
});
module.exports = mongoose.model("Projects", projectsSchema);
