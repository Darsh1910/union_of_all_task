const express = require('express');
const con = require('../../database/db');


const router = express.Router();

function saveEduDetail(req, res) {
    try {
        console.log("education data :: ", req.body);

        //   for school education details
        var id = req.body.id;
        var ssc_board = req.body.ssc_board;
        var ssc_year = req.body.ssc_year;
        var ssc_per = req.body.ssc_per;

        var hsc_board = req.body.hsc_board;
        var hsc_year = req.body.hsc_year;
        var hsc_per = req.body.hsc_per;


        // for college education details

        var bachler_collge_name = req.body.bachler_collge_name;
        var bachler_collge_uni = req.body.bachler_collge_uni;
        var bachler_collge_p_year = req.body.bachler_collge_p_year;
        var bachler_collge_per = req.body.bachler_collge_per;


        var master_collge_name = req.body.master_collge_name;
        var master_collge_uni = req.body.master_collge_uni;
        var master_collge_p_year = req.body.master_collge_p_year;
        var master_collge_per = req.body.master_collge_per;

        res.send("education details saved succeessfully !!! ");


        var query1 = `insert into Education_Detail_schooling (edu_sch_id,ssc_board,ssc_passing_year,
            ssc_percentage,hsc_board,hsc_passing_year,hsc_percentage) values(?,?,?,?,?,?,?);`;

        con.query(query1, [id, ssc_board, ssc_year, ssc_per, hsc_board, hsc_year,
            hsc_per], function (err, result) {

                console.log("Data inserted into School table !!!!");

            });



        var query2 = `insert into Education_Detail_collage (edu_col_id,bachelar_course_name,
                bachelar_university,bachelar_passing_year,bachelar_percentage,master_course_name,
                master_university,master_passing_year,master_percentage) values (?,?,?,?,?,?,?,?,?)`;

        con.query(query2, [id, bachler_collge_name, bachler_collge_uni, bachler_collge_p_year,
            bachler_collge_per, master_collge_name, master_collge_uni, master_collge_p_year, master_collge_per], function (err, result) {

                console.log("Data inserted into college table !!!!");
            });




    } catch (error) {
        console.error(error);

    }
}


module.exports = saveEduDetail;