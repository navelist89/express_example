var express = require('express');
var router = express.Router();

const libmanager = require('../libs/libmanager');


libmanager.listdirs('libs', function(err,data){
  if(err)
    console.log(err);

  try{
    var path = data+'/routes/index';
    require(path)(router);
    console.log("Route loaded : " + data);
  }
  catch(e){
    console.log("Exception while loading route from : "+data+"  ||  "+e);
  }

});



           
// 페이지 렌더링입니다.
router.get('/', function(req, res){
  res.render('index', {title : '메인', user : req.user}); // 로그인에 성공할시 req.user에 세션값이 담겨있게됩니다.
});

     
module.exports = router;
