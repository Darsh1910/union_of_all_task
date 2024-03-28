const express = require('express');
const con = require('../../../database/db');

const router = express.Router();



router.post("/", function (req, res) {
    try {


        // //   for school education details

        var id = req.body.id;

        var ssc_board = req.body.ssc_board;
        var ssc_year = req.body.ssc_year;
        var ssc_per = req.body.ssc_per;

        var hsc_board = req.body.hsc_board;
        var hsc_year = req.body.hsc_year;
        var hsc_per = req.body.hsc_per;


        // for college education details

        var bachler_course_name = req.body.bachler_collge_name;
        var bachler_collge_uni = req.body.bachler_collge_uni;
        var bachler_collge_p_year = req.body.bachler_collge_p_year;
        var bachler_collge_per = req.body.bachler_collge_per;


        var master_course_name = req.body.master_collge_name;
        var master_collge_uni = req.body.master_collge_uni;
        var master_collge_p_year = req.body.master_collge_p_year;
        var master_collge_per = req.body.master_collge_per;


        var sch_details = `update Education_Detail_schooling set ssc_board='${ssc_board}',ssc_passing_year='${ssc_year}',
        ssc_percentage='${ssc_per}',hsc_board='${hsc_board}',hsc_passing_year='${hsc_year}',
        hsc_percentage='${hsc_per}' where edu_sch_id=${id};`;

        // college details

        var col_details = `update Education_Detail_collage set bachelar_course_name='${bachler_course_name}',
        bachelar_university='${bachler_collge_uni}',bachelar_passing_year='${bachler_collge_p_year}',bachelar_percentage='${bachler_collge_per}'
        ,master_course_name='${master_course_name}',master_university='${master_collge_uni}',master_passing_year='${master_collge_p_year}',
        master_percentage='${master_collge_per}' where edu_col_id=${id};`;


        con.query(sch_details + col_details, function (err, result) {
            if (err) throw err;
            console.log("updated basic details education details  !!!!");
        });




        console.log(req.body);
        res.send("value updated successfully !!");








    } catch (error) {
        console.error(error);
    }

});

module.exports = router;