function updateForm()
{
  let userId = prompt('Enter UserId that You want to update Records !!!');

  console.log(userId);
  location = "updateform?"+"id="+userId;
  
  console.log("location :: ",location);
   
}



function validateForm() {


    let flag = 1;

    var allInput = document.getElementsByClassName("require-field");
    var erro_msg = document.getElementsByClassName("error-msg");
    var email = document.getElementById("email");
    var phone_number = document.getElementById("phone_number");
    var dob = document.getElementById("dob");
    var zipcode = document.getElementById("zipcode");

    var pass_year = document.getElementsByClassName("pass-year");

    // var lan_hindi = document.getElementsByClassName("lan_hindi");
    // console.log(lan_hindi);

    var cmp_name_1 = document.getElementById("cmp_1");
    var cmp_name_2 = document.getElementById("cmp_2");

    var ref_1 = document.getElementById("ref_name_1");
    var ref_2 = document.getElementById("ref_name_2");


    var ssc_field = document.getElementById("ssc_field");
    var hsc_field = document.getElementById("hsc_field");
    var degree_field_1 = document.getElementById("col_deg_field_1");
    var degree_field_2 = document.getElementById("col_deg_field_2");





  // ssc fields 

  var ssc_details = document.getElementsByClassName('ssc_div');


    if(ssc_field.value === "" && ssc_details[0].value === "" && ssc_details[1].value === "")
    {
        
      let err = document.getElementById("error-msg-ssc");
      err.innerHTML = "";
       
    }
    else
    {

      if(ssc_field.value === "" || ssc_details[0].value === "" || ssc_details[1].value === "")
     {
      let err = document.getElementById("error-msg-ssc");
      err.innerHTML = "Either fill all fields or leave empty !!";
        err.style.color = "red";
        flag = 0;
     }

    }
    
    // else
    // {
    //   let err = document.getElementById("error-msg-hsc");
    //   err.innerHTML = "Either fill all fields or leave empty !!";
    //     err.style.color = "red";

        
    // }

    // hsc fields 


    var hsc_details = document.getElementsByClassName('hsc_div');


    if(hsc_field.value === "" && hsc_details[0].value === "" && hsc_details[1].value === "")
    {

      let err = document.getElementById("error-msg-hsc");
        err.innerHTML = "";
    }
    else
    { 
      if(hsc_field.value === "" || hsc_details[0].value === "" || hsc_details[1].value === ""){
      let err = document.getElementById("error-msg-hsc");
      err.innerHTML = "Either fill all fields or leave empty !!";
      err.style.color = "red";
      flag = 0;
      }

    }

    // bachelar fields  
    var bachelar_details = document.getElementsByClassName('col_div_1');



    if(degree_field_1.value === "" &&  bachelar_details[0].value === "" && bachelar_details[1].value === "" && bachelar_details[2].value === "")
    {

      let err = document.getElementById("error-msg-col-1");
      err.innerHTML = "";
          
    }
    else
    {
      if(degree_field_1.value === "" ||  bachelar_details[0].value === "" || bachelar_details[1].value === "" || bachelar_details[2].value === "")
      {
        let err = document.getElementById("error-msg-col-1");
        err.innerHTML = "Either fill all fields or leave empty !!";
        err.style.color = "red";
        flag = 0;
      }
        
    }

    // master fields

    var master_details = document.getElementsByClassName('col_div_2');

    if(degree_field_2.value === "" && master_details[0].value === "" && master_details[1].value === "" && master_details[2].value === "")
    {
      let err = document.getElementById("error-msg-col-2");
      err.innerHTML = "";
        
    }
    else
    {
      if(degree_field_2.value === "" || master_details[0].value === "" || master_details[1].value === "" || master_details[2].value === "")
      {
        let err = document.getElementById("error-msg-col-2");
        err.innerHTML = "Either fill all fields or leave empty !!!";
        err.style.color = "red";
        flag = 0;
      }
        
    }













  

    

      if(cmp_name_1.value !== "")
      {
          

          var cmp_details = document.getElementsByClassName('cmp-field');

        //   for(let i=0;i<cmp_details.length;i++)
        //   {
        //       console.log("value ::",cmp_details[i].value);
        //   }


        //   console.log(cmp_details);

        if(cmp_details[0].value === "" || cmp_details[1].value === "" || cmp_details[2].value === "")
        {
            let err = document.getElementById("error-cmp-data");
          err.innerHTML = "Either fill all fields or leave empty !!!";
          err.style.color = "red";

        }
          
      }
      else
      {
        let err = document.getElementById("error-cmp-data");
          err.innerHTML = "";
          
      }




      if(cmp_name_2.value !== "")
      {
          

          var cmp_details = document.getElementsByClassName('cmp_field');


        if(cmp_details[0].value === "" || cmp_details[1].value === "" || cmp_details[2].value === "")
        {
            let err = document.getElementById("error-cmp-field");
          err.innerHTML = "Either fill all fields or leave empty !!!";
          err.style.color = "red";

        }
          
      }
      else
      {
        let err = document.getElementById("error-cmp-field");
          err.innerHTML = "";
          
      }

     // reference table 


     if(ref_1.value !== "")
     {
         

         var ref_details = document.getElementsByClassName('ref-field_1');

       //   for(let i=0;i<cmp_details.length;i++)
       //   {
       //       console.log("value ::",cmp_details[i].value);
       //   }


       //   console.log(cmp_details);

       if(ref_details[0].value === "" || ref_details[1].value === "")
       {
           let err = document.getElementById("error-msg-ref-1");
            err.innerHTML = "Either fill all fields or leave empty !!!";
           err.style.color = "red";

       }
         
     }
     else
     {
       let err = document.getElementById("error-msg-ref-1");
         err.innerHTML = "";
         
     }


      if(ref_2.value !== "")
      {
          

          var ref_details = document.getElementsByClassName('ref-field_2');

        //   for(let i=0;i<cmp_details.length;i++)
        //   {
        //       console.log("value ::",cmp_details[i].value);
        //   }


        //   console.log(cmp_details);

        if(ref_details[0].value === "" || ref_details[1].value === "")
        {
            let err = document.getElementById("error-msg-ref-2");
             err.innerHTML = "Either fill all fields or leave empty !!!";
            err.style.color = "red";

        }
          
      }
      else
      {
        let err = document.getElementById("error-msg-ref-2");
          err.innerHTML = "";
          
      }


    
    

     checkMail(email);
     checkPhoneNumber(phone_number);
     checkDateOfBirth(dob);

  
  


     function checkMail(data)
     {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        str = data.value;
        console.log(str);  
        
        if(!pattern.test(str))
        {
            var mail_err = document.getElementById('email-err')
            mail_err.innerHTML = "Email is invalid !!!";
            mail_err.style.color = "red";
            return false;    
    
        } 


        
    
      }


      function checkPhoneNumber(data)
      {

        let pattern = /^[6-9]\d{9}$/; 
        str = data.value;
        console.log(str);  
        
        if(!pattern.test(str))
        {
            var mail_err = document.getElementById('phone-err')
            mail_err.innerHTML = "Phone Number is invalid !!!";
            mail_err.style.color = "red";
            return false; 
            
    
        } 


      }


 

      function checkDateOfBirth(data)
      {

        let pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/; 
        str = data.value;
        console.log(str);  
        
        if(!pattern.test(str))
        {
            var err_div = document.getElementById('dob-err')
            err_div.innerHTML = "Date of Birth is invalid !!!";
            err_div.style.color = "red";
            return false; 
            
    
        } 


       }



  



     
     
    

    // var first_div = document.getElementById("first-div");




    // console.log(allInput);
    // if (allInput[0].value === "") {

    //     console.log("please enter valid input !!");
       

    //     if (first_div.getElementsByTagName('span')) {

    //         first_div.getElementsByTagName('span').innerHTML = "please enter details ";
            

    //     }
    //     else {

    //         var gendererror = document.createElement("span");
    //         gendererror.innerHTML = "please enter details ";
    //         document.getElementById("first-div").appendChild(gendererror);
            

    //     }

    //     return false;

    // }
    console.log(allInput);

    for(let i=0;i<allInput.length;i++)
    {
        if(allInput[i].value.trim() === "")
        {
           erro_msg[i].innerHTML = "Please fill the field !!";
           erro_msg[i].style.color = "red";
           flag = 0;
           
        }
       
    }

    if(flag === 0)
    {
        return false;
    }


    // email.addEventListener('onchange',function(event){

    //     console.log(event.target.value);

    // })



    return true;
}

function add_company_row()
{
    var element = document.getElementById('clone_td');
   var copy = element.cloneNode(true);
   var destination = document.getElementById('company_row');
   destination.appendChild(copy);

}


function remove_company_row()
{
    // var element = document.getElementById('clone_td');
    // var copy = element.cloneNode(true);
    // var destination = document.getElementById('company_row');
    // destination.removeChild(copy);


    var allTr = document.getElementsByClassName("company_div");
    
    var lastTr = allTr.length-1;

    console.log("last ::",lastTr);


    var destination = document.getElementById('company_row');
    destination.removeChild(allTr[lastTr]);



    console.log(allTr);


 

}

function add_ref_row()
{
    var element = document.getElementById('clone_ref');
   var copy = element.cloneNode(true);
   var destination = document.getElementById('ref_table');
   destination.appendChild(copy);

}


function remove_ref_row()
{
    // var element = document.getElementById('clone_td');
    // var copy = element.cloneNode(true);
    // var destination = document.getElementById('company_row');
    // destination.removeChild(copy);


    var allTr = document.getElementsByClassName("ref_div");
    
    var lastTr = allTr.length-1;

    console.log("last ::",lastTr);


    var destination = document.getElementById('ref_table');
    destination.removeChild(allTr[lastTr]);



    console.log(allTr);


 

}



function clickHandler()
{
    var lan_hindi = document.getElementById("lan_hindi").checked;
    var lan_english = document.getElementById("lan_english").checked;
    var lan_gujarati = document.getElementById("lan_gujarati").checked;


    console.log(lan_hindi);

    if(lan_hindi)
    {
        var lan_h_r = document.getElementById("lan_h_r").disabled= false;
        var lan_h_w = document.getElementById("lan_h_w").disabled= false;
        var lan_h_s = document.getElementById("lan_h_s").disabled= false;

    }
    else
    {
        var lan_h_r = document.getElementById("lan_h_r").disabled= true;
        var lan_h_w = document.getElementById("lan_h_w").disabled= true;
        var lan_h_s = document.getElementById("lan_h_s").disabled= true;


    }

    if(lan_english)
    {
        var lan_h_r = document.getElementById("lan_e_r").disabled= false;
        var lan_h_w = document.getElementById("lan_e_w").disabled= false;
        var lan_h_s = document.getElementById("lan_e_s").disabled= false;

    }
    else
    {
        var lan_h_r = document.getElementById("lan_e_r").disabled= true;
        var lan_h_w = document.getElementById("lan_e_w").disabled= true;
        var lan_h_s = document.getElementById("lan_e_s").disabled= true;


    }

    if(lan_gujarati)
    {
        var lan_h_r = document.getElementById("lan_g_r").disabled= false;
        var lan_h_w = document.getElementById("lan_g_w").disabled= false;
        var lan_h_s = document.getElementById("lan_g_s").disabled= false;

    }
    else
    {
        var lan_h_r = document.getElementById("lan_g_r").disabled= true;
        var lan_h_w = document.getElementById("lan_g_w").disabled= true;
        var lan_h_s = document.getElementById("lan_g_s").disabled= true;


    }

    



}



function radiobtnHandler()
{

    var tech_1 = document.getElementById("tech_1").checked;
    var tech_2 = document.getElementById("tech_2").checked;
    var tech_3 = document.getElementById("tech_3").checked;
    var tech_4 = document.getElementById("tech_4").checked;

    if(tech_1)
    {
        var lan_h_r = document.getElementById("tech_lan_1_B").disabled= false;
        var lan_h_w = document.getElementById("tech_lan_1_M").disabled= false;
        var lan_h_s = document.getElementById("tech_lan_1_E").disabled= false;


    }else{
        var lan_h_r = document.getElementById("tech_lan_1_B").disabled= true;
        var lan_h_w = document.getElementById("tech_lan_1_M").disabled= true;
        var lan_h_s = document.getElementById("tech_lan_1_E").disabled= true;

    }


    if(tech_2)
    {
        var lan_h_r = document.getElementById("tech_lan_2_B").disabled= false;
        var lan_h_w = document.getElementById("tech_lan_2_M").disabled= false;
        var lan_h_s = document.getElementById("tech_lan_2_E").disabled= false;


    }else{
        var lan_h_r = document.getElementById("tech_lan_2_B").disabled= true;
        var lan_h_w = document.getElementById("tech_lan_2_M").disabled= true;
        var lan_h_s = document.getElementById("tech_lan_2_E").disabled= true;

    }


    if(tech_3)
    {
        var lan_h_r = document.getElementById("tech_lan_3_B").disabled= false;
        var lan_h_w = document.getElementById("tech_lan_3_M").disabled= false;
        var lan_h_s = document.getElementById("tech_lan_3_E").disabled= false;


    }else{
        var lan_h_r = document.getElementById("tech_lan_3_B").disabled= true;
        var lan_h_w = document.getElementById("tech_lan_3_M").disabled= true;
        var lan_h_s = document.getElementById("tech_lan_3_E").disabled= true;

    }


    if(tech_4)
    {
        var lan_h_r = document.getElementById("tech_lan_4_B").disabled= false;
        var lan_h_w = document.getElementById("tech_lan_4_M").disabled= false;
        var lan_h_s = document.getElementById("tech_lan_4_E").disabled= false;


    }else{
        var lan_h_r = document.getElementById("tech_lan_4_B").disabled= true;
        var lan_h_w = document.getElementById("tech_lan_4_M").disabled= true;
        var lan_h_s = document.getElementById("tech_lan_4_E").disabled= true;

    }
    




}


  

 


        // var btn = document.getElementsByClassName('empty');
        // var btn_id = document.getElementById('firstname');

        // btn_id.addEventListener('input',function(){

        //      if(btn_id.value === "")
        //      {

        //         console.log("fgfugjugy");
        //         var gendererror = document.createElement("span");
        //          gendererror.innerHTML = "please enter details ";
        //          btn_id.parentNode.appendChild(gendererror);
        //      }

        //      else
        //      {
        //         btn_id.parentElement.removeChild(gendererror);
        //      }

        // })

        // let inputFields = document.getElementsByClassName('input-field');   
        

        // for(let i=0;i<inputFields.length;i++)
        // {
        //     if(inputFields[i] === '')
        //     {
        //         console.log("field is empty !!!");
        //     }
        // }

        // console.log(inputFields);

        

    //     for (var i = 0; i < inputFields.length; i++) {
    //     if (inputFields[i].value === '') {
       
      
    //     }
    //     else{
    //         document.querySelector('#fail-message').innerHTML = '';
    //     }
    //  }

        // var allTags = document.querySelectorAll(".input-field");
        // var btn = document.getElementById('firstname');

        // console.log(btn);


        // console.log(allTags);

       
        //     allTags.addEventListener('input', (e) => {

        //         console.log(e);

        //     })

    