const express = require('express');


const router = express.Router();



router.get("/",function(req,res){

       res.render('multi_step_form/notfound');
    
});


module.exports = router;