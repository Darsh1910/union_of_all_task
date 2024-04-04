const express = require('express');
const verfiyToken = require('./middleware/Auth');

const app = express.Router();

const homePage = require('./controller/home');

const register = require('./controller/register');
const register_data = require('./controller/register_data');
const active_user = require('./controller/Active_user/active_user');
const {getLogin,postLogin} = require('./controller/Login/loginpage');
const logOut = require('./controller/logout');
const {get_forgetpassword,post_forgetpassword} = require('./controller/forgotPassword/forgotpassword')

const dymaic_table = require('./controller/Dynamic_table/dynamic_table');
const kuku_kube = require('./controller/kuku_kube/kuku_cube');
const tic_tac_toe = require('./controller/Tic_Tac_Toe/tic_tac_toe');
const event_table= require('./controller/event_table/event_table');

const gridView = require('./controller/dynamic_grid_view/route1');
const delimiter_search = require('./controller/delimineterSearch/getData');

const fetchData = require('./controller/Exam_result/fetchData');
const getReportCard = require('./controller/Exam_result/getReportCard');
const getResult =  require('./controller/Exam_result/getResult');


const {getFormData,postFormData} = require('./controller/job_application_form/getformdata');
const updateForm = require('./controller/job_application_form/updateForm');
const postUpdate = require('./controller/job_application_form/update');


const site_1 = require('./controller/html_site_1/site_1_api');
const site_2 = require('./controller/html_site_2/site_2_api');
const site_3 = require('./controller/html_site_3/site_3_api');

const timezone = require('./controller/timezoneConverter/home')
const ajax_task = require('./controller/fetch_pagination/Home');
const ajax_task_detail = require('./controller/fetch_pagination/getDetails');


const multi_step_form = require('./controller/multi_step_form/Home')
const saveBasicDetail = require('./controller/multi_step_form/saveBasicDetail')
const saveEduDetail = require('./controller/multi_step_form/saveEduDetail')
const saveWorkExperience = require('./controller/multi_step_form/saveWorkExperience')
const savelanguageknown = require('./controller/multi_step_form/savelanguageknown')
const savetechlanguage = require('./controller/multi_step_form/savetechlanguage')
const savereference = require('./controller/multi_step_form/savereference')
const savepreferences = require('./controller/multi_step_form/savepreferences')

const updateBasicDetail = require('./controller/multi_step_form/update/updateBasicDetail')
const updateEduDetails = require('./controller/multi_step_form/update/updateEduDetails')
const updateWorkExperience = require('./controller/multi_step_form/update/updateWorkExperience')
const updateReferences = require('./controller/multi_step_form/update/updateReferences')
const updatetechnology = require('./controller/multi_step_form/update/updatetechnology')
const updateLanguage = require('./controller/multi_step_form/update/updateLanguage')
const updatepreference = require('./controller/multi_step_form/update/updatepreference');

const updateForm_ajax = require('./controller/multi_step_form/updateForm')








app.route("/").get(register);
app.route("/register").post(register_data);

app.route("/activeUser").get(active_user);

app.route("/login").get(getLogin).post(postLogin);

app.route("/logout").get(logOut)

app.route('/forgotpassword').get(get_forgetpassword).post(post_forgetpassword);

// Task 1
app.route("/dynamic_table").get(verfiyToken,dymaic_table);

//Task 2
app.route("/kuku_kube").get(verfiyToken,kuku_kube);

// Task 3
app.route("/tic_tac_toe").get(verfiyToken,tic_tac_toe);

// Task 4
app.route("/event_table").get(verfiyToken,event_table);

// Task 5
app.route("/getData").all(verfiyToken,gridView);

// Task 6
app.route("/delimineter_search").all(verfiyToken,delimiter_search);

// Task 7
app.route('/fetchData').get(verfiyToken,fetchData);
app.route('/result').get(verfiyToken,getReportCard);
app.route('/getreportcard').get(verfiyToken,getResult);

// Task 8

app.route("/getformdata").get(verfiyToken,getFormData).post(verfiyToken,postFormData);
app.route("/updateform").get(verfiyToken,updateForm);
app.route("/dataupdated").get(verfiyToken,postUpdate);

// Task 9 multi step job application form

app.route("/form").get(multi_step_form);

// app.use("/updateformId",require('./router/fetchId/fetchupdateId'));

app.route("/form/saveBasicDetails").post(verfiyToken,saveBasicDetail);
app.route("/form/saveEduDetail").post(verfiyToken,saveEduDetail);
app.route("/form/saveWorkDetail").post(verfiyToken,saveWorkExperience);
app.route("/form/savelanguage").post(verfiyToken,savelanguageknown);
app.route("/form/savetechnology").post(verfiyToken,savetechlanguage);
app.route("/form/savereferences").post(verfiyToken,savereference);
app.route("/form/savepreference").post(verfiyToken,savepreferences);


app.route("/form/updateBasicDetail").post(verfiyToken,updateBasicDetail);
app.route("/form/updateEduDetail").post(verfiyToken,updateEduDetails);
app.route("/form/updateWorkDetail").post(verfiyToken,updateWorkExperience);
app.route("/form/updateReferences").post(verfiyToken,updateReferences);
app.route("/form/updatetechnology").post(verfiyToken,updatetechnology);
app.route("/form/updatelanguage").post(verfiyToken,updateLanguage);
app.route("/form/updatepreference").post(verfiyToken,updatepreference);



// app.use("/updateformId",require('./router/fetchId/fetchupdateId'));
// app.use("/updateformId",require('./router/updateForm'));
// app.use("/updateform",require('./router/fetchId/fetchupdateId'));

app.route("/form/updateform").get(verfiyToken,updateForm_ajax);

// app.use("/updateformData",require('./router/updateForm'));
// app.use("*",require('./router/multi_step_form/NotFound/Notfound'))
// app.use("/getbyid",require('./router/dynamic_grid_view/getuser'));
// app.use("/getAllDetail",require('./router/dynamic_grid_view/getAllDetail'));

// Task 10

app.route("/site_1").get(verfiyToken,site_1);

// Task 11

app.route("/site_2").get(verfiyToken,site_2);

// Task 12

app.route("/site_3").get(verfiyToken,site_3);

// Task 13
app.route("/timezone").get(verfiyToken,timezone);

// Task 14
app.route("/fetch").get(verfiyToken,ajax_task);
app.route("/fetch/postDetails/:id").get(verfiyToken,ajax_task_detail);



app.route("/home").get(verfiyToken,homePage);


module.exports = app;