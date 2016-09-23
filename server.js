var express = require('express'),
    bp = require('body-parser'),
    path = require('path'),
    port = process.env.PORT || 8000,
    root = __dirname,
    app = express();

app.use(express.static(path.join(root,'/bower_components')))
app.use(express.static(path.join(root,'/client')))
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/route.js')(app);
app.listen(port,function(){
  console.log("listening "+ port);
})
