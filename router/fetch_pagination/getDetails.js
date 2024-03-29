const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

router.get("/:id",verfiyToken,function(req,res){
     
    res.render('ajax_pagination/postDetails');

});

module.exports = router;