var mongoose = require('mongoose');


module.exports=function(){
mongoose.connect('mongodb://root:123qwe@ds241570.mlab.com:41570/login_tutorial');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conneted mongoDB');
});


}
