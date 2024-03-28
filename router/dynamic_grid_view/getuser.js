const express = require('express');

const con = require('../../database/db');
const verfiyToken = require('../../middleware/Auth');


const router = express.Router();




router.get("/",verfiyToken,function(req, res)  {

    var st_id = Number(req.query.id);
    console.log(st_id);

    con.query("select *from student_info where id= "+(st_id), function (err, result, fields) {
        if(err)
        {
            res.render('dynammic_grid_view/grid');
            return;
        }

        try {
            res.render('dynammic_grid_view/gridview',{result:result,data:[],current_page:1,input_data:[],lastpage:1});
            
        } catch (err) {
            
            res.render('dynammic_grid_view/grid');
            res.end();
            
        }

    

    });








});

module.exports = router;