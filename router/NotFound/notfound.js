const express = require('express');


const router = express.Router();

// function ensureCreditials(req,res,next)
// {
//      res.render('Home');
//      next();
// } 

router.get("/",function(req,res){
    res.send("Not Found Page !!!");
})



module.exports = router;
