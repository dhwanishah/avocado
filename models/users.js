var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.export = mongoose.model('User', new Schema ({
	username: String,
	password: String,
	admin: Boolean
}));