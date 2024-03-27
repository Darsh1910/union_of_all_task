const express = require('express');
const con = require('../../database/db');

const router = express.Router();


router.get("/", function (req, res) {
    res.render('job_application_form/job_application_form_5');
});


router.post("/", function (req, res) {
    try {

        // console.log(req.body);


        //  for Basic Details 

        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var designation = req.body.designation;
        var email = req.body.email;
        var phonenumber = req.body.phonenumber;


        var address1 = req.body.address1;
        var address2 = req.body.address2;
        var city = req.body.city;
        var state = req.body.state;
        var gender = req.body.gender;
        var zipcode = req.body.zipcode;

        var rel_status = req.body.status;
        var dateOfBirth = req.body.dob;


        //   for school education details
        var ssc_board = req.body.ssc_board;
        var ssc_year = req.body.ssc_year;
        var ssc_per = req.body.ssc_per;

        var hsc_board = req.body.hsc_board;
        var hsc_year = req.body.hsc_year;
        var hsc_per = req.body.hsc_per;


        // for college education details

        var bachler_collge_name = req.body.ba_c_name;
        var bachler_collge_uni = req.body.ba_c_uni;
        var bachler_collge_p_year = req.body.ba_p_year;
        var bachler_collge_per = req.body.ba_percentage;


        var master_collge_name = req.body.master_c_name;
        var master_collge_uni = req.body.master_c_uni;
        var master_collge_p_year = req.body.master_p_year;
        var master_collge_per = req.body.master_percentage;

        // for work experience details 

        var company_name = req.body.c_name;
        var company_designation = req.body.des_1;
        var Date_from = req.body.date_from;
        var Date_to = req.body.date_to;

        // for language known details



        var lan_1 = req.body.lan_hindi;

        console.log(lan_1);
        var lan_2 = req.body.lan_eng;
        var lan_3 = req.body.lan_gujarati;


        // for technologies known 

        var tech_lan_1 = req.body.tech_lan_1;
        var tech_lan_2 = req.body.tech_lan_2;
        var tech_lan_3 = req.body.tech_lan_3;
        var tech_lan_4 = req.body.tech_lan_4;

        // reference contact details 

        var ref_name = req.body.ref_name;
        var ref_contact = req.body.ref_contact;
        var ref_relation = req.body.ref_relation;


        // preferences details 

        var location = req.body.location;
        var notice_peroid = req.body.notice_peroid;
        var expected_ctc = req.body.Expected_ctc;
        var current_ctc = req.body.current_ctc;
        var department = req.body.department;

        console.log(firstname);


        var query = `insert into basic_detail (first_name,last_name,Designation,Email,phone_number,Address1,Address2
            ,city,state,gender,ZipCode,Relationship_status,Date_Of_Birth)
             values('${firstname}','${lastname}','${designation}','${email}','${phonenumber}',
             '${address1}','${address2}','${city}','${state}','${gender}','${zipcode}','${rel_status}','${dateOfBirth}');`;

        console.log("query :: " + query);

        con.query(query, function (err, result) {


            if (err) throw err;
            console.log("Data inserted into Basic Details !!!");
            var id = result.insertId;
            console.log(id);

            insertData(id);

        });




        function insertData(id) {

            console.log("hello from insertData !!! ");

            var query1 = `insert into Education_Detail_schooling (edu_sch_id,ssc_board,ssc_passing_year,
            ssc_percentage,hsc_board,hsc_passing_year,hsc_percentage) values(?,?,?,?,?,?,?);`;

            con.query(query1, [id, ssc_board, ssc_year, ssc_per, hsc_board, hsc_year,
                hsc_per], function (err, result) {
                    if (err) throw err;
                    console.log("Data inserted into School table !!!!");

                });



            var query2 = `insert into Education_Detail_collage (edu_col_id,bachelar_course_name,
                bachelar_university,bachelar_passing_year,bachelar_percentage,master_course_name,
                master_university,master_passing_year,master_percentage) values (?,?,?,?,?,?,?,?,?)`;

            con.query(query2, [id, bachler_collge_name, bachler_collge_uni, bachler_collge_p_year,
                bachler_collge_per, master_collge_name, master_collge_uni, master_collge_p_year, master_collge_per], function (err, result) {
                    if (err) throw err;
                    console.log("Data inserted into college table !!!!");
                });


            // work experience table


            for (let i = 0; i < company_name.length; i++) {

                var query3 = `insert into work_experience (id,company_name,designation,from_date,to_date) values (?,?,?,?,?)`;


                con.query(query3, [id, company_name[i], company_designation[i], Date_from[i], Date_to[i]], function (err, result) {
                    if (err) throw err;
                    console.log("Data inserted into Work Experience !!!");

                });

            }



            // language known table


            var query4 = `insert into language_known (id,lan,lan_type) values (?,?,?);`;

            if (lan_1 !== undefined) {

                var arr1 = [];

                for (let i = 1; i < lan_1.length; i++) {
                    arr1.push(lan_1[i]);
                }

                console.log(arr1);

                for (let i = 0; i < arr1.length; i++) {

                    con.query(query4, [id, 'Hindi', arr1[i]], function (err, result) {
                        if (err) throw err;
                        console.log("Data inserted into lan 1 !!!");

                    });

                }


            }

            if (lan_2 !== undefined) {

                var arr2 = [];

                for (let i = 1; i < lan_2.length; i++) {
                    arr2.push(lan_2[i]);

                }

                console.log(arr2);

                for (let i = 0; i < arr2.length; i++) {
                    con.query(query4, [id, 'English', arr2[i]], function (err, result) {
                        if (err) throw err;
                        console.log("Data inserted into lan 2 !!!");
                    });

                }
            }


            if (lan_3 !== undefined) {

                var arr3 = [];

                for (let i = 1; i < lan_3.length; i++) {
                    arr3.push(lan_3[i]);

                }

                console.log(arr3);

                for (let i = 0; i < arr3.length; i++) {

                    con.query(query4, [id, 'Gujarati', arr3[i]], function (err, result) {
                        if (err) throw err;
                        console.log("Data inserted into lan 3 !!!");

                    });

                }


            }




            // technology known table

            var query5 = `insert into technology_known (t_id,technology_known,tech_level) values (?,?,?);`;


            if (tech_lan_1 !== undefined) {

                con.query(query5, [id, tech_lan_1[0], tech_lan_1[1]], function (err, result) {
                    if (err) throw err;
                    
                    console.log("Data inserted into technology language - 1 !!!");

                });
            }



            if (tech_lan_2 !== undefined) {

                con.query(query5, [id, tech_lan_2[0], tech_lan_2[1]], function (err, result) {
                    if (err) throw err;
                    
                    console.log("Data inserted into technology language - 2 !!!");

                });
            }



            if (tech_lan_3 !== undefined) {

                con.query(query5, [id, tech_lan_3[0], tech_lan_3[1]], function (err, result) {
                    if (err) throw err;
                    
                    console.log("Data inserted into technology language - 3 !!!");

                });
            }



            if (tech_lan_4 !== undefined) {

                con.query(query5, [id, tech_lan_4[0], tech_lan_4[1]], function (err, result) {
                    if (err) throw err;
                    
                    console.log("Data inserted into technology language - 4 !!!");

                });
            }




            //  refrences  contact table

            var query6 = `insert into reference_contact (re_id,name,Contact_numeber,Relation) values (?,?,?,?);`;

            for (let i = 0; i < ref_name.length; i++) {
                con.query(query6, [id, ref_name[i], ref_contact[i], ref_relation[i]], function (err, result) {
                    if (err) throw err;
                    
                    console.log("Data inserted into Refences table  !!!");

                });

            }




            //   preferences table 

            var query7 = `insert into prefences_table (id,location,notice_period,expected_ctc,
                current_ctc,department) values (?,?,?,?,?,?);`;


            con.query(query7, [id, location, notice_peroid, expected_ctc, current_ctc, department], function (err, result) {
                if (err) throw err;
                 
                console.log("Data inserted into Preference table !!! ");


            });




            res.send("DATA inserted Successfully !!! ")




        }



        // console.log(req.body);
        // console.log(req.body.lan_hindi);

        // res.send("data inserted successfully !!!");






        console.log("All Data Inserted Successfully !!!! ");


    } catch (error) {

        console.log("errror ");

        console.error(error);
    }

});


module.exports = router;