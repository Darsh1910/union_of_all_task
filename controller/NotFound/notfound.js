const express = require('express');


const router = express.Router();

// function ensureCreditials(req,res,next)
// {
//      res.render('Home');
//      next();
// } 

router.get("/",function(req,res){
    try {
        res.render('NotFound/notfound');
    } catch (error) {
        
    }
})


module.exports = router;
