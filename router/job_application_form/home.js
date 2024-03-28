const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();



router.get("/",verfiyToken,function(req,res){
    res.render('job_application_form_5');
});


module.exports = router;

