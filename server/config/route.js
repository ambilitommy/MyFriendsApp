var friends = require('./../controller/friends.js')
module.exports = function(app){
  app.get('/friends',friends.index);
  app.get('/show/:id',friends.show);
  app.get('/editpage/:id',friends.show);
  app.post('/friends',friends.create);
  app.put('/friends',friends.update);
  app.delete('/friends/:id',friends.delete);
  console.log("future routes");
}
