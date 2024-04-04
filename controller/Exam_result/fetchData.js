const express = require('express');
const con = require('../../database/db');
const verfiyToken = require('../../middleware/Auth');
const router = express.Router();


router.get("/", verfiyToken, function (req, res) {

    try {


        var current_page = Number(req.query.page) || 1;

        var orderby = req.query.orderby;
        var direction = req.query.direction;

        var query_string;


        let dateQuery = req.query.order;

        if (dateQuery === undefined) {
            dateQuery = "01,2024";
        }

        if (req.query.order === "02,2024") {

            if (orderby === undefined && direction === undefined) {

                query_string = `select s.id as id,s.first_name as name,count(*) as presentDays,((count(*)/31)*100) as percentage
        FROM student_info as s
        LEFT JOIN att_info as a ON s.id = a.id
        where att_status = "P" and (att_date between '2024-02-01' and '2024-02-28')
        group by s.id limit ${(current_page - 1) * 20},20`;

            }

            else {

                query_string = `select s.id as id,s.first_name as name,count(*) as presentDays,((count(*)/31)*100) as percentage
        FROM student_info as s
        LEFT JOIN att_info as a ON s.id = a.id
        where att_status = "P" and (att_date between '2024-02-01' and '2024-02-28')
        group by s.id order by ${orderby} ${direction} limit ${(current_page - 1) * 20},20`;

            }

        }


        else {


            var query = dateQuery.split(",");
            var orderby = req.query.orderby;
            var direction = req.query.direction;


            let month = query[0];
            let year = query[1];

            // orderby and direction undefined then....

            if (orderby !== undefined && direction !== undefined) {
                query_string = `select s.id as id,s.first_name as name,count(*) as presentDays,((count(*)/31)*100) as percentage
        FROM student_info as s
        LEFT JOIN att_info as a ON s.id = a.id
        where att_status = "P" and (att_date between '${year}-${month}-01' and '${year}-${month}-31')
        group by s.id order by ${orderby} ${direction} limit ${(current_page - 1) * 20},20`;

            }

            else {

                query_string = `select s.id as id,s.first_name as name,count(*) as presentDays,((count(*)/31)*100) as percentage
        FROM student_info as s
        LEFT JOIN att_info as a ON s.id = a.id
        where att_status = "P" and (att_date between '${year}-${month}-01' and '${year}-${month}-31')
        group by s.id limit ${(current_page - 1) * 20},20`;

            }

        }

        con.query(query_string, function (err, result) {
            if (err) throw err;
            // console.log(result);

            res.render("exam_result/getData", { result: result, current_page: current_page, dateQuery: dateQuery });

        });
    }
    catch (error) {
        console.error(error);
    }




});

module.exports = router;