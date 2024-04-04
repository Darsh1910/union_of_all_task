const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();


router.get("/",verfiyToken,function(req,res){
    try {
        res.render('dynamicTable/index');
    } catch (error) {
        console.error(error);
    }
    
});



module.exports = router;
