const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();


function site_3(req,res){
    try {
        res.render('html_site_3/index');
    } catch (error) {
        console.error(error);
    }
    
}



module.exports = site_3;