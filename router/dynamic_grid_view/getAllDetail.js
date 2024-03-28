const express = require('express');
const getAllRecord = require('../../middleware/getAllrecord');
const con = require('../../database/db');
const verfiyToken = require('../../middleware/Auth');

const router = express.Router();

router.all("/",verfiyToken,async function (req, res) {


    var first_name = req.query.first_name;
    var last_name = req.query.last_name;
    var city = req.query.city;
    var order = req.query.condition;


    var data = `select *from student_info where first_name like '%${first_name}%' ${order} last_name like 
    '%${last_name}%' ${order} city like '%${city}%'`;


    let current_page;

    if (req.query.page) {
        current_page = Number(req.query.page);
    } else {
        current_page = 1;
    }

    console.log("current_page :: "+current_page);

    try {

        var lastpage = await getAllRecord(data);

    } catch (error) {

        res.render('dynammic_grid_view/grid');
        return res.end();


    }

    // for checking if page is last page then assign default last page as 1

    if (lastpage === 0) {
        lastpage = 1;
    }

    else {
        lastpage = lastpage;
    }

    console.log("lastpage :: "+lastpage);



    con.query(data + " limit " + (current_page - 1) * 20 +",20", function (err, result) {

            try {
                
                res.render('dynammic_grid_view/filterdata', { result: result, current_page: current_page, first_name: first_name, last_name: last_name, city: city, order: order,lastpage:lastpage });

            } catch (err) {

                res.render('dynammic_grid_view/grid');
                res.end();

            }



        });



});

module.exports = router;