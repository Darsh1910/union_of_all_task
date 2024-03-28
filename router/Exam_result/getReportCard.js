const express = require('express');
const con = require('../../database/db');
const verfiyToken = require('../../middleware/Auth');
const router = express.Router();


router.get("/",verfiyToken,function (req, res) {
    try {

        var getId = Number(req.query.id);

        var report_query = `SELECT student_id as id ,subject_id as subject,sum(prilimias_mark_pr) as pr_PracticalMark,sum(prilimias_mark_th) as pr_TheoryMark,sum(terminal_mark_pr) as tr_PracticalMark
    ,sum(terminal_mark_th) as tr_TheoryMark,sum(final_mark_pr) as f_PracticalMark,sum(final_mark_th) as f_TheoryMark,
    (sum(prilimias_mark_pr)+sum(prilimias_mark_th)+sum(terminal_mark_pr)+sum(terminal_mark_th)+sum(final_mark_pr)
    +sum(final_mark_th)) as Total
    FROM exam_result 
     where student_id= ${getId} group by subject_id;`;


        if (req.query.id === undefined) {
            report_query = `SELECT student_id as id ,subject_id as subject,sum(prilimias_mark_pr) as pr_PracticalMark,sum(prilimias_mark_th) as pr_TheoryMark,sum(terminal_mark_pr) as tr_PracticalMark
    ,sum(terminal_mark_th) as tr_TheoryMark,sum(final_mark_pr) as f_PracticalMark,sum(final_mark_th) as f_TheoryMark,
    (sum(prilimias_mark_pr)+sum(prilimias_mark_th)+sum(terminal_mark_pr)+sum(terminal_mark_th)+sum(final_mark_pr)
    +sum(final_mark_th)) as Total
    FROM exam_result 
     where student_id=1 group by subject_id;`;

        }

        con.query(report_query, function (err, result, fields) {
            if (err) throw err;
            // console.log(result);

            res.render('exam_result/getResultById', { result: result });


        });


    } catch (error) {
        console.error(error);
    }


});

module.exports = router;