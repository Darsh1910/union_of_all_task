const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();


function dynamic_table(req,res){
    try {
        res.render('dynamicTable/index');
    } catch (error) {
        console.error(error);
    }
    
}



module.exports = dynamic_table;
