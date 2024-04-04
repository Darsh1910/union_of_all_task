const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

function ajax_task_detail(req,res){
    try {
        res.render('ajax_pagination/postDetails');
    }
    catch(error)
    {
       console.error(error);
    }
     
    

}

module.exports = ajax_task_detail;