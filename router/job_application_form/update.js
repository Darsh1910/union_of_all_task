const express = require('express');
const con = require('../../database/db');

const router = express.Router();



router.post("/", function (req, res) {
    try {

        var id = Number(req.query.id);


        console.log("updated form data " + id);
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

        var bachler_course_name = req.body.ba_c_name;
        var bachler_collge_uni = req.body.ba_c_uni;
        var bachler_collge_p_year = req.body.ba_p_year;
        var bachler_collge_per = req.body.ba_percentage;


        var master_course_name = req.body.master_c_name;
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

        var lan_2 = req.body.lan_eng;
        var lan_3 = req.body.lan_gujarati;

        var w_id = req.body.w_id;
        var reference_id = req.body.reference_id;


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


        // update record 

        // basic details

        var basic_detail = `update basic_detail set first_name='${firstname}',last_name='${lastname}',
        Designation='${designation}',Email='${email}',phone_number='${phonenumber}',Address1='${address1}',
        Address2='${address2}',city='${city}',state='${state}',gender='${gender}',ZipCode='${zipcode}',
        Relationship_status='${rel_status}',Date_Of_Birth='${dateOfBirth}' where emp_id=${id};`

        // scholl_details

        var sch_details = `update Education_Detail_schooling set ssc_board='${ssc_board}',ssc_passing_year='${ssc_year}',
        ssc_percentage='${ssc_per}',hsc_board='${hsc_board}',hsc_passing_year='${hsc_year}',
        hsc_percentage='${hsc_per}' where edu_sch_id=${id};`;

        // college details

        var col_details = `update Education_Detail_collage set bachelar_course_name='${bachler_course_name}',
        bachelar_university='${bachler_collge_uni}',bachelar_passing_year='${bachler_collge_p_year}',bachelar_percentage='${bachler_collge_per}'
        ,master_course_name='${master_course_name}',master_university='${master_collge_uni}',master_passing_year='${master_collge_p_year}',
        master_percentage='${master_collge_per}' where edu_col_id=${id};`;

        con.query(basic_detail + sch_details + col_details, function (err, result) {
            if (err) throw err;
            console.log("updated basic details education details  !!!!");
        });


        // work experience


        var work_experience = `update work_experience set company_name=?,designation=?,from_date=?,to_date=? where id=${id} and w_id=?`;

        for (let i = 0; i < company_name.length; i++) {

            con.query(work_experience, [company_name[i], company_designation[i], Date_from[i], Date_to[i], w_id[i]], function (err, result) {
                if (err) throw err;
                // console.log(work_experience);
                console.log("Work Experience updated !!! ");

            });

        }

        // delete record before insert 


        var delCheckfield = `delete from language_known where id = ${id};`;

        con.query(delCheckfield,function(err,result){
             
              if(err) throw err;

              console.log("delete records before update !!");

        });





        var query4 = `insert into language_known (id,lan,lan_type) values (?,?,?);`;

        if (lan_1 !== undefined) {

            var arr1 = [];

            for (let i = 1; i < lan_1.length; i++) {
                arr1.push(lan_1[i]);
            }

            // console.log(arr1);

            for (let i = 0; i < arr1.length; i++) {

                con.query(query4, [id,'Hindi', arr1[i]], function (err, result) {

                    console.log("Data updated into lan 1 !!!");

                });

            }


        }

        if (lan_2 !== undefined) {

            var arr2 = [];

            for (let i = 1; i < lan_2.length; i++) {
                arr2.push(lan_2[i]);

            }

            // console.log(arr2);

            for (let i = 0; i < arr2.length; i++) {

                con.query(query4, [id, 'English', arr2[i]], function (err, result) {

                    console.log("Data inserted into lan 2 !!!");

                });

            }
        }


        if (lan_3 !== undefined) {

            var arr3 = [];

            for (let i = 1; i < lan_3.length; i++) {
                arr3.push(lan_3[i]);

            }

            // lan_3.map((index)=>(
            //     arr3.push(lan_3[index])
            // ));

            // console.log(arr3);

            for (let i = 0; i < arr3.length; i++) {

                con.query(query4, [id, 'Gujarati', arr3[i]], function (err, result) {

                    console.log("Data inserted into lan 3 !!!");

                });

            }


        }

        // delete technology records brfore update

        var tech_del_query = `delete from technology_known where t_id = ${id}`;


        con.query(tech_del_query,function(err,result){
             
            if(err) throw err;

            console.log("delete records before update technology known !!");

      });





        var query5 = `insert into technology_known (t_id,technology_known,tech_level) values (?,?,?);`;


        if (tech_lan_1 !== undefined) {

            con.query(query5, [id, tech_lan_1[0], tech_lan_1[1]], function (err, result) {

                console.log("Data inserted into technology language - 1 !!!");

            });
        }



        if (tech_lan_2 !== undefined) {

            con.query(query5, [id, tech_lan_2[0], tech_lan_2[1]], function (err, result) {

                console.log("Data inserted into technology language - 2 !!!");

            });
        }



        if (tech_lan_3 !== undefined) {

            con.query(query5, [id, tech_lan_3[0], tech_lan_3[1]], function (err, result) {

                console.log("Data inserted into technology language - 3 !!!");

            });
        }



        if (tech_lan_4 !== undefined) {

            con.query(query5, [id, tech_lan_4[0], tech_lan_4[1]], function (err, result) {

                console.log("Data inserted into technology language - 4 !!!");

            });
        }



        // references 

        var references  = `update reference_contact set name=?,Contact_numeber=?,Relation=? where re_id=${id} and id=?;`;

        for (let i = 0; i < ref_name.length; i++) {
            con.query(references, [ref_name[i], ref_contact[i], ref_relation[i],reference_id[i]], function (err, result) {

                console.log("Data inserted into Refences table  !!!");

            });

        }


        // preferences 


        var preferences = `update prefences_table set location=?,notice_period=?,expected_ctc=?,
            current_ctc=?,department=? where id=${id}`;


        con.query(preferences, [location, notice_peroid, expected_ctc, current_ctc, department], function (err, result) {
            if (err) throw err;
            console.log("Data Updated into Preference table !!! ");


        });




        // // for work experience section

        // for(let i=0;i<company_name.length;i++)
        // {
        //     var work_experience = `update work_experience set company_name=?,
        //     designation=?,from_date=?,to_date=? where id=${id}`;

        //     console.log(id);

        //     con.query(work_experience,[company_name[i], company_designation[i], Date_from[i], Date_to[i]],function(err,result){
        //         if(err) throw err;
        //         console.log(work_experience);
        //          console.log("Work Experience updated !!! ");

        //     });

        // }

        // UPDATE `job_application_DB_29`.`work_experience`
        // SET
        // `id` = <{id: }>,
        // `company_name` = <{company_name: }>,
        // `designation` = <{designation: }>,
        // `from_date` = <{from_date: }>,
        // `to_date` = <{to_date: }>
        // WHERE ;


        // console.log(req.body);
        res.send("value updated successfully !!");


    } catch (error) {
        console.error(error);
    }


});


module.exports = router;