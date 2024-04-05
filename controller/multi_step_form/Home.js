const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();



function multi_step_form(req,res){
       try {
       res.render('multi_step_form/index');
              
       } catch (error) {
         console.error(error);
       }

}      


module.exports = multi_step_form;

