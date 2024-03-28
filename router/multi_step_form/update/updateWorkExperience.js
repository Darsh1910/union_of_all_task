const express = require('express');
const con = require('../../../database/db');
const verfiyToken = require('../../../middleware/Auth');

const router = express.Router();


router.post('/',function (req, res) {
    try {

        var id = req.body.id;
        var company_name = req.body.company_name;
        var company_designation = req.body.company_designation;
        var Date_from = req.body.Date_from;
        var Date_to = req.body.Date_to;

        var work_experience_select = `select w_id from work_experience where company_name='${company_name[0]}' and id=${id}`;

        var data;

        con.query(work_experience_select, function (err, result) {

            if (err) throw err;

            data = Number(result[0].w_id);

            console.log("data:: " + data);


            var work_experience = `update work_experience set company_name=?,designation=?,from_date=?,to_date=? where id=${id} and w_id=?`;

            for (let i = 0; i < company_name.length; i++) {

                con.query(work_experience, [company_name[i], company_designation[i], Date_from[i], Date_to[i], data], function (err, result) {
                    if (err) throw err;
                    console.log(work_experience);
                    console.log("Work Experience updated !!! ");

                });

                data++;

            }

        });




        console.log("work experience :: ", req.body);
        res.send("work experience details saved succeessfully !!! ");

    } catch (error) {
        console.error(error);
    }
});


module.exports = router;


