const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();



router.get("/",verfiyToken,function(req,res){

       res.render('multi_step_form/index');
    
});


module.exports = router;

