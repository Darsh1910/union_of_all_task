const express = require('express');


const router = express.Router();



router.get("/",function(req,res){
    res.render('job_application_form_5');
});


module.exports = router;

