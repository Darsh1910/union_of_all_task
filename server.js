
const express = require('express');


// var bodyParser = require('body-parser');


const app = express();
const cookieParser = require('cookie-parser')

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", require('./router/register'));
app.use("/register", require('./router/register_data'));

app.use("/activeUser", require('./router/Active_user/active_user'));

app.use("/login", require('./router/Login/loginpage'));

app.use('/forgotpassword', require('./router/forgotPassword/forgotpassword'));


// Task 1
app.use("/dynamic_table", require('./router/Dynamic_table/dynamic_table'));

//Task 2
app.use("/kuku_kube", require('./router/kuku_kube/kuku_cube'));

// Task 3
app.use("/tic_tac_toe", require('./router/Tic_Tac_Toe/tic_tac_toe'));

// Task 4
app.use("/event_table", require('./router/event_table/event_table'));

// Task 5
app.use("/getData", require('./router/dynamic_grid_view/route1'));

// Task 6
app.use("/delimineter_search", require('./router/delimineterSearch/getData'));

// Task 7
app.use('/fetchData',require('./router/Exam_result/fetchData'));
app.use('/result',require('./router/Exam_result/getResult'));
app.use('/getreportcard',require('./router/Exam_result/getReportCard'));


// Task 8

app.use("/getformdata",require('./router/job_application_form/getformdata'));
app.use("/updateform",require('./router/job_application_form/updateForm'));
app.use("/dataupdated",require('./router/job_application_form/update'));

// Task 9 multi step job application form


app.use("/form",require('./router/multi_step_form/Home'))

// app.use("/updateformId",require('./router/fetchId/fetchupdateId'));

app.use("/form/saveBasicDetails",require('./router/multi_step_form/saveBasicDetail'));
app.use("/form/saveEduDetail",require('./router/multi_step_form/saveEduDetail'));
app.use("/form/saveWorkDetail",require('./router/multi_step_form/saveWorkExperience'));
app.use("/form/savelanguage",require('./router/multi_step_form/savelanguageknown'));
app.use("/form/savetechnology",require('./router/multi_step_form/savetechlanguage'));
app.use("/form/savereferences",require('./router/multi_step_form/savereference'));
app.use("/form/savepreference",require('./router/multi_step_form/savepreferences'));


app.use("/form/updateBasicDetail",require('./router/multi_step_form/update/updateBasicDetail'));
app.use("/form/updateEduDetail",require('./router/multi_step_form/update/updateEduDetails'))
app.use("/form/updateWorkDetail",require('./router/multi_step_form/update/updateWorkExperience'));
app.use("/form/updateReferences",require('./router/multi_step_form/update/updateReferences'));
app.use("/form/updatetechnology",require('./router/multi_step_form/update/updatetechnology'));
app.use("/form/updatelanguage",require('./router/multi_step_form/update/updateLanguage'));
app.use("/form/updatepreference",require('./router/multi_step_form/update/updatepreference'));



// app.use("/updateformId",require('./router/fetchId/fetchupdateId'));

// app.use("/updateformId",require('./router/updateForm'));

// app.use("/updateform",require('./router/fetchId/fetchupdateId'));

app.use("/form/updateform",require('./router/multi_step_form/updateForm'));

// app.use("/updateformData",require('./router/updateForm'));
// app.use("*",require('./router/multi_step_form/NotFound/Notfound'))
// app.use("/getbyid",require('./router/dynamic_grid_view/getuser'));
// app.use("/getAllDetail",require('./router/dynamic_grid_view/getAllDetail'));

// Task 10

app.use("/site_1",require('./router/html_site_1/site_1_api'));

// Task 11

app.use("/site_2",require('./router/html_site_2/site_2_api'));

// Task 12

app.use("/site_3",require('./router/html_site_3/site_3_api'));







app.use("/home", require('./router/home'));


app.listen(3000, () => {

    console.log("server started at port 3000 !!");

});
