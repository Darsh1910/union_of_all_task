const express = require('express');
const router = express.Router();

async function logOut(req,res){
    try {
       await res.clearCookie("token");
        res.redirect("/login");
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = logOut;