const express = require('express');


const router = express.Router();



router.get("/",function(req,res){
       try {
              res.render('register',{err:""});
       } catch (error) {
              console.error(error);
       }

    
});


module.exports = router;





