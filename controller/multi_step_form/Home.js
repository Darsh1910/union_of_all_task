const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();



function multi_step_form(req,res){

       res.render('multi_step_form/index');
    
}      


module.exports = multi_step_form;

