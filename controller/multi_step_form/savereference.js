const express = require('express');
const con = require('../../database/db');


const router = express.Router();

router.post('/',function(req,res){
    try {
        console.log("references :: ",req.body);

        var ref_name = req.body.ref_name;
        var ref_contact = req.body.ref_contact;
        var ref_relation = req.body.ref_relation;
        var id = req.body.id;



        var reference_query = `insert into reference_contact (re_id,name,Contact_numeber,Relation) values (?,?,?,?);`;

        for (let i = 0; i < ref_name.length; i++) {
            con.query(reference_query, [id, ref_name[i], ref_contact[i], ref_relation[i]], function (err, result) {
                if(err) throw err;
            
                console.log("Data inserted into References table  !!!");

            });

        }








        
        
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;
