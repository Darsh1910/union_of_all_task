const express = require('express');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();


function tic_tac_toe(req,res){
    try {
    res.render('tic_tac_toe/index');
        
    } catch (error) {
        console.error(error);
    }
}



module.exports = tic_tac_toe;