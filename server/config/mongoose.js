var mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    model_path = path.join(__dirname,'./../models');
console.log("future mongoose connection and model loading");

mongoose.connect('mongodb://localhost/friends');

mongoose.connection.on('connected',function(){
  console.log("mongoose connection successful");
});
mongoose.connection.on('error',function(err){
  console.log("ERROR : "+err);
});
mongoose.connection.on('disconnected',function() {
  console.log("Mongoose disconnected");
})
process.on('SIGINT',function(){
  mongoose.connection.close(function functionName() {
    console.log("mongoose disconnected through app termination");
  process.exit(0);})
})

fs.readdirSync(model_path).forEach(function(file) {
  if(file.indexOf('.js')>=0){
    require(path.join(model_path,file));
  }
})
