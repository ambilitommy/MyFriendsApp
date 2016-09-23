//same as module.exports={a:function(){},b:function()};
var mongoose = require('mongoose');
var friendModel = mongoose.model('Friends');

console.log("Controller loaded");
function FriendsController(){
  this.index = function(req,res){
    friendModel.find({},function(err,friends){
      if(err){ console.log("ERROR: "+err); }
      else{
        res.json({status:true,data:friends}) }
    })
  }
  this.show = function(req,res){
    friendModel.findOne({_id:req.params.id},function(err,friend){
      res.json({status:true,data:friend});
    })
  }
  this.create =  function(req,res){
    console.log('entered server create');
    //var newfriend = new friendModel({fname:req.body.fname,lname:req.body.lname});
    friendModel.create({fname:req.body.fname,lname:req.body.lname},function(err){
      if(err){  console.log("Error: "+ err ); }
      else{console.log("created");}
       })
    // newfriend.save(function(err){
    //   if(err){  console.log("Error: "+ err ); }
    // })
  }
  this.update =  function(req,res){
    console.log(req.body.fname);
    friendModel.update({_id:req.body._id},{$set:{fname:req.body.fname,lname:req.body.lname}},function(err){
      if(err){
        console.log(err);
      }
      else{
        res.json({status:true});
      }
    })
  }
  this.delete = function(req,res){
    console.log(req.params.id);
    friendModel.remove({_id:req.params.id},function(err){
      if(err){
        console.log("ERROR: "+err);
      }
      else{
        res.json({status:true})
      }
    })
  }
}
module.exports = new FriendsController();
