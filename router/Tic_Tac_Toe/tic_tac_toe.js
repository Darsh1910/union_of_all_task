const express = require('express');


const router = express.Router();


router.get("/",function(req,res){
    res.render('tic_tac_toe/index');
});



module.exports = router;