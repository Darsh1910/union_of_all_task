const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();


function timezone(req,res){
    try {
        res.render('timeZoneConverter/index');
    } catch (error) {
        console.error(error);
    }

}


module.exports = timezone;