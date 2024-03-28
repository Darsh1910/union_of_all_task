const express = require('express');


const router = express.Router();


router.get("/",function(req,res){
    res.render('html_site_3/index');
});



module.exports = router;