console.log("friends Model");
var mongoose = require('mongoose');
friendsSchema = mongoose.Schema({
fname : String,
lname : String
});
mongoose.model('Friends',friendsSchema);
