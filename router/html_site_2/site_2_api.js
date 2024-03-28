const express = require('express');


const router = express.Router();


router.get("/",function(req,res){
    res.render('html_site_2/index');
});



module.exports = router;