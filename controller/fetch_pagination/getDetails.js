const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

router.get("/:id",verfiyToken,function(req,res){
    try {
        res.render('ajax_pagination/postDetails');
    }
    catch(error)
    {
       console.error(error);
    }
     
    

});

module.exports = router;