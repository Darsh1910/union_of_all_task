const express = require('express');
const con = require('../../../database/db');
const verfiyToken = require('../../../middleware/Auth');


const router = express.Router();


function updatepreference(req, res) {
    try {

        var id = req.body.id;

        var location = req.body.location;
        var notice_peroid = req.body.notice_peroid;
        var expected_ctc = req.body.Expected_ctc;
        var current_ctc = req.body.current_ctc;
        var department = req.body.department;





        var preferences = `update prefences_table set location=?,notice_period=?,expected_ctc=?,
current_ctc=?,department=? where id=${id}`;


        con.query(preferences, [location, notice_peroid, expected_ctc, current_ctc, department], function (err, result) {
            if (err) throw err;
            console.log("Data Updated into Preference table !!! ");


        });

    } catch (error) {
        console.error(error);
    }
}


module.exports = updatepreference;