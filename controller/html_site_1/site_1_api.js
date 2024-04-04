const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();


function site_1(req,res){

    try {
        res.render('html_site_1/index');
    } catch (error) {
        console.error(error);
    }
    
}



module.exports = site_1;