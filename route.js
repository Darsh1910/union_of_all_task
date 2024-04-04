const express = require('express');

const app = express.Router();


app.use("/", require('./controller/register'));
app.use("/register", require('./controller/register_data'));

app.use("/activeUser", require('./controller/Active_user/active_user'));

app.use("/login", require('./controller/Login/loginpage'));
app.use("/logout",require('./controller/logout'));



app.use('/forgotpassword', require('./controller/forgotPassword/forgotpassword'));


// Task 1
app.use("/dynamic_table", require('./controller/Dynamic_table/dynamic_table'));

//Task 2
app.use("/kuku_kube", require('./controller/kuku_kube/kuku_cube'));

// Task 3
app.use("/tic_tac_toe", require('./controller/Tic_Tac_Toe/tic_tac_toe'));

// Task 4
app.use("/event_table", require('./controller/event_table/event_table'));

// Task 5
app.use("/getData", require('./controller/dynamic_grid_view/route1'));

// Task 6
app.use("/delimineter_search", require('./controller/delimineterSearch/getData'));

// Task 7
app.use('/fetchData',require('./controller/Exam_result/fetchData'));
app.use('/result',require('./controller/Exam_result/getResult'));
app.use('/getreportcard',require('./controller/Exam_result/getReportCard'));


// Task 8

app.use("/getformdata",require('./controller/job_application_form/getformdata'));
app.use("/updateform",require('./controller/job_application_form/updateForm'));
app.use("/dataupdated",require('./controller/job_application_form/update'));

// Task 9 multi step job application form


app.use("/form",require('./controller/multi_step_form/Home'))

// app.use("/updateformId",require('./router/fetchId/fetchupdateId'));

app.use("/form/saveBasicDetails",require('./controller/multi_step_form/saveBasicDetail'));
app.use("/form/saveEduDetail",require('./controller/multi_step_form/saveEduDetail'));
app.use("/form/saveWorkDetail",require('./controller/multi_step_form/saveWorkExperience'));
app.use("/form/savelanguage",require('./controller/multi_step_form/savelanguageknown'));
app.use("/form/savetechnology",require('./controller/multi_step_form/savetechlanguage'));
app.use("/form/savereferences",require('./controller/multi_step_form/savereference'));
app.use("/form/savepreference",require('./controller/multi_step_form/savepreferences'));


app.use("/form/updateBasicDetail",require('./controller/multi_step_form/update/updateBasicDetail'));
app.use("/form/updateEduDetail",require('./controller/multi_step_form/update/updateEduDetails'))
app.use("/form/updateWorkDetail",require('./controller/multi_step_form/update/updateWorkExperience'));
app.use("/form/updateReferences",require('./controller/multi_step_form/update/updateReferences'));
app.use("/form/updatetechnology",require('./controller/multi_step_form/update/updatetechnology'));
app.use("/form/updatelanguage",require('./controller/multi_step_form/update/updateLanguage'));
app.use("/form/updatepreference",require('./controller/multi_step_form/update/updatepreference'));



// app.use("/updateformId",require('./router/fetchId/fetchupdateId'));

// app.use("/updateformId",require('./router/updateForm'));

// app.use("/updateform",require('./router/fetchId/fetchupdateId'));

app.use("/form/updateform",require('./controller/multi_step_form/updateForm'));

// app.use("/updateformData",require('./router/updateForm'));
// app.use("*",require('./router/multi_step_form/NotFound/Notfound'))
// app.use("/getbyid",require('./router/dynamic_grid_view/getuser'));
// app.use("/getAllDetail",require('./router/dynamic_grid_view/getAllDetail'));

// Task 10

app.use("/site_1",require('./controller/html_site_1/site_1_api'));

// Task 11

app.use("/site_2",require('./controller/html_site_2/site_2_api'));

// Task 12

app.use("/site_3",require('./controller/html_site_3/site_3_api'));

// Task 13
app.use("/timezone",require('./controller/timezoneConverter/home'));

// Task 14
app.use("/fetch",require('./controller/fetch_pagination/Home'));
app.use("/fetch/postDetails",require('./controller/fetch_pagination/getDetails'));



app.use("/home", require('./controller/home'));


module.exports = app;