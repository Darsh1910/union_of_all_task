const express = require('express');
const con = require('../../database/db');
const verfiyToken = require('../../middleware/Auth');
const router = express.Router();



router.get("/",verfiyToken,function (req, res) {

    try {

        var cur_page = Number(req.query.page) || 1;
        var query_string;

        if (req.query.page === undefined) {
            query_string = `SELECT student_info.id,student_info.first_name ,sum(prilimias_mark_pr) as 
        p_practical,sum(prilimias_mark_th) as p_theory, sum(terminal_mark_pr) as t_practical,
        sum(terminal_mark_th) as t_theory ,sum(final_mark_pr) as f_practical,sum(final_mark_th) as f_theory ,
        (sum(prilimias_mark_pr)+sum(prilimias_mark_th)+sum(terminal_mark_pr)+sum(terminal_mark_th)+sum(final_mark_pr)+sum(final_mark_th)) as Total
        FROM exam_result as e, student_info
         where student_info.id=e.student_id 
        group by student_id limit 0,20`;
        }


        else {
            query_string = `SELECT student_info.id,student_info.first_name ,sum(prilimias_mark_pr) as 
    p_practical,sum(prilimias_mark_th) as p_theory, sum(terminal_mark_pr) as t_practical,
    sum(terminal_mark_th) as t_theory ,sum(final_mark_pr) as f_practical,sum(final_mark_th) as f_theory ,
    (sum(prilimias_mark_pr)+sum(prilimias_mark_th)+sum(terminal_mark_pr)+sum(terminal_mark_th)+sum(final_mark_pr)+sum(final_mark_th)) as Total
    FROM exam_result as e, student_info
     where student_info.id=e.student_id 
    group by student_id limit ${(cur_page - 1) * 20},20`;
        }



        con.query(query_string, function (err, result) {
            if (err) throw err;
            // console.log(result);

            res.render("exam_result/resultData", { result: result, cur_page: cur_page });

        });




    } catch (error) {
        console.error(error);
    }


});

module.exports = router;


