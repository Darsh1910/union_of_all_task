const express = require('express');
const con = require('../../database/db');


const router = express.Router();

router.post('/',function(req,res){
    try {
        console.log("preferences :: ",req.body);


        var location = req.body.location;
        var notice_peroid = req.body.notice_peroid;
        var expected_ctc = req.body.expected_ctc;
        var current_ctc = req.body.current_ctc;
        var department = req.body.deparment;
        var id = req.body.id;



           //   preferences table 

           var preferences = `insert into prefences_table (id,location,notice_period,expected_ctc,
            current_ctc,department) values (?,?,?,?,?,?);`;


        con.query(preferences, [id, location, notice_peroid, expected_ctc, current_ctc, department], function (err, result) {

            console.log("Data inserted into Preference table !!! ");


        });




        
        
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;

