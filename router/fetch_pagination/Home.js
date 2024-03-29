const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

router.get("/",verfiyToken,function(req,res){
     
    res.render('ajax_pagination/index');

});

module.exports = router;