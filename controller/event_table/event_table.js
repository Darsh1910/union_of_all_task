const express = require('express');
const verfiyToken = require('../../middleware/Auth');





function event_table(req,res){
    try {
        res.render('eventTable/events');
    } catch (error) {
        console.error(error);
    }

    
}



module.exports = event_table;