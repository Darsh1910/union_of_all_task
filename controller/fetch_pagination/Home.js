const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

function ajax_task(req,res){
    try {
        res.render('ajax_pagination/index');
    } catch (error) {
        console.error(error);
    
    }
     
   

}

module.exports = ajax_task;