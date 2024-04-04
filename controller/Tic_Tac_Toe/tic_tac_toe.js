const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();


router.get("/",verfiyToken,function(req,res){
    res.render('tic_tac_toe/index');
});



module.exports = router;