const express = require('express');
const con = require('../../database/db');
const router = express.Router();

 function updateForm_ajax(req, res) {
    try {

        console.log(req.query.id);
        

        // if (req.query.id === undefined) {
        //     res.send("enter valid data");
           

        // }

            var id = Number(req.query.id);

            console.log("id  ::",id);

              retriveData(id);

          // res.send("update page")

       


        // res.render('getform');

        function retriveData(id) {

            var basic_query = `select first_name,last_name,Designation,Email,phone_number,Address1,Address2,city,state,gender,ZipCode,Relationship_status,Date_Of_Birth from basic_detail where emp_id=${id};`;



            var edu_detail_sch = `select ssc_board,ssc_passing_year,ssc_percentage,hsc_board,
        hsc_passing_year,hsc_percentage from Education_Detail_schooling where edu_sch_id=${id};`


            var edu_detail_col = `select bachelar_course_name,bachelar_university,bachelar_passing_year,
        bachelar_percentage,master_course_name,master_university,master_passing_year,
        master_percentage from Education_Detail_collage where edu_col_id=${id};`;


            var work_details = `select w_id,company_name,designation,from_date,to_date from work_experience where id=${id};`;

            var references = `select id,name,Contact_numeber,Relation from reference_contact where re_id=${id};`

            var preferences = `select location,notice_period,expected_ctc,current_ctc,
        department from prefences_table where id=${id};`;

            var language_known = `select lan,lan_type from language_known where id =${id};`;


            var tech_known = `select technology_known,tech_level from technology_known where t_id = ${id};`;





            con.query(basic_query + edu_detail_sch + edu_detail_col + work_details + references +
                preferences + language_known + tech_known, function (err, result) {
                    if (err) throw err;

                    console.log("lan:: " + result[6][0].lan);
                    var Hindi_lan = [];
                    var Gujarati_lan = [];
                    var English_lan = [];



                    console.log('length ::' + result[6].length);

                    console.log(typeof (result[6][0]));

                    for (let i of result[6]) {
                        let temp = Object.values(i);
                        console.log(temp[0]);


                        if (temp[0] == 'Hindi') {
                            Hindi_lan.push(temp[1]);
                        }


                        if (temp[0] == 'Gujarati') {
                            Gujarati_lan.push(temp[1]);
                        }


                        if (temp[0] == 'English') {
                            English_lan.push(temp[1]);
                        }



                    }

                    let lan_obj = {
                        "Hindi": Hindi_lan,
                        "Gujarati": Gujarati_lan,
                        "English": English_lan
                    }


                    console.log(lan_obj);



                    var tech_lan_1 = [];
                    var tech_lan_2 = [];
                    var tech_lan_3 = [];
                    var tech_lan_4 = [];


                    for (let i of result[7]) {
                        let temp = Object.values(i);

                        if (temp[0] == 'PHP') {
                            tech_lan_1.push(temp[1]);
                        }


                        if (temp[0] == 'MYSQL') {
                            tech_lan_2.push(temp[1]);
                        }


                        if (temp[0] == 'LARAVEL') {
                            tech_lan_3.push(temp[1]);
                        }


                        if (temp[0] == 'ORACLE') {
                            tech_lan_4.push(temp[1]);
                        }


                    }






                    let tech_lan_obj = {
                        "PHP": tech_lan_1,
                        "MYSQL": tech_lan_2,
                        "LARAVEL": tech_lan_3,
                        "ORACLE": tech_lan_4
                    };







                    console.log(result);



                    res.render('multi_step_form/update', { result: result, id: id, lan_obj: lan_obj, tech_lan_obj: tech_lan_obj });




                });

            // res.send("user Id fetch successfully ");
        }







    } catch (error) {
        console.error(error);
    }
}


module.exports = updateForm_ajax;