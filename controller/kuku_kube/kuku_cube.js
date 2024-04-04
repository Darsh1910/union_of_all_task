const express = require('express');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

function kuku_kube(req,res){
    try {
        res.render('kuku_kube/index');
    } catch (error) {
        console.error(error);
    }
    
}



module.exports = kuku_kube;