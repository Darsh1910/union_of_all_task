const express = require('express');
const getAllRecord = require('../../middleware/getAllrecord');
const con = require('../../database/db');

const router = express.Router();



router.all('/', async function (req, res) {


    // taking query from parameter 

    var data = req.query.input_data;



    var orderby = req.query.orderby;
    var order = req.query.order;

    // if data is undefined then set gridView as below 

    if (data === undefined) {
        res.render('dynammic_grid_view/generateGridView', { result: [], current_page: 1, input_data: [], data: [] });


        return res.end();

    }
    


    // taking current page from parameter and then convert into Number 

    let current_page;

    if (req.query.page) {
        current_page = Number(req.query.page);
    } else {
        current_page = 1;
    }

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




    // check if url parameter does not have any order or orderby then assign default flow




    if (order === undefined && orderby === undefined) {

        con.query(data + " limit " + (current_page - 1) * 20 + ",20", function (err, result, fields) {
            if (err) {
                res.send("please enter valid query !!!!!");

                return res.end();
            }

            try {
                console.log("current_page:" + current_page);



                res.render('dynammic_grid_view/generateGridView', { result: result, current_page: current_page, input_data: req.query.input_data, lastpage: lastpage, data: data })

            }
            catch (err) {
                res.send("please enter valid query !!!!!");

            }

        });



    }

    // taking order and orderby from url parameter then pass to query 


    else {

     

        con.query(data + " order by " + (orderby) + " " + (order) + " limit " + (current_page - 1) * 20 + ",20", function (err, result, fields) {
            if (err) {
                res.send("please enter valid query !!!!!");

                return res.end();
            }

            try {
                console.log("current_page:" + current_page);



                res.render('generateGridView', { result: result, current_page: current_page, input_data: req.query.input_data, lastpage: lastpage, data: data })

            }
            catch (err) {
                res.send("please enter valid query !!!!!");

            }

        });

    }

});



module.exports = router;