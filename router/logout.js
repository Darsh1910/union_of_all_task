const express = require('express');
const router = express.Router();

router.get("/",async function(req,res){
    try {
       await res.clearCookie("token");
        res.redirect("/login");
        
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;