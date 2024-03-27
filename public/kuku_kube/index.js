var table_info = document.getElementById('table_info');
var allTd = document.querySelectorAll('td');

var btn = document.getElementById('random_id');


var scoreCounter = 0;



var countDown = 60;

var timeout = setInterval(()=>{
  
    countDown--;
    document.getElementById('timer').innerText = countDown;

    if(countDown==0)
    {
        alert("time out !!!");
        clearInterval(timeout);
       
    }

    



},(1000))






var colors = ["red", "blue", "green", "orange", "grey","violet", "lightblue"];

function randomColor() {
  
    var tdLength = document.querySelectorAll('td');
    
    var len = tdLength.length;

    var randomColor = colors[Math.floor(Math.random()*colors.length)];

    for(let i=0;i<len;i++)
    {
        tdLength[i].style.backgroundColor = randomColor;
    }

    // console.log(randomColor);
}



function randomValue(row,col)
{
    let total = row*col;
    let number = Math.floor(Math.random()*total);

    return number;

}


table_info.addEventListener('click',function(event){
   

    if(event.target.id == 'random_id')
    {
        // adding row and cols 

    var tableInfo = document.getElementById('table_info');
    var rowCount = tableInfo.rows.length;
    var colCount = tableInfo.rows[0].cells.length;


    

    var row = tableInfo.insertRow(rowCount);

    for (let i = 0; i < colCount; i++) {
        row.insertCell(i);
    }


    var row = tableInfo.rows;


    let i = 0;

    for (let j = 0; j < row.length; j++) {
        row[j].insertCell(colCount);

    }


    randomColor();

    var score = document.getElementById('score');
    scoreCounter++;
    score.innerText = scoreCounter;


    var removeId = document.getElementById('random_id').setAttribute('id','');
    
    
    console.log(event.target.id);


    let totallength = rowCount*colCount;

    console.log(totallength);

    
    let randomNumber = randomValue(rowCount,colCount);

     let data = document.querySelectorAll('td');
     data[randomNumber].setAttribute('id','random_id');

   
    }

    else
    {
        alert("ypu clicked wrong Box !!! select correct Box ...")
    }

    

    
     
    // create random box
    
    

     
});




// function Onrandomclick()
// {

//     var RandomColor = '#';
// var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];

// RandomColor += letters[Math.floor[Math.random()*letters.length]];


//     var getBtn = document.getElementsByTagName('td');
//     var randomBtn = document.getElementById('td_1');




//     randomBtn.style.backgroundColor = RandomColor;

// }



// table_info.addEventListener('click',function()
// {
      
// });

// for(let i=0;i<allTd.length;i++)
// {
//     allTd[i].addEventListener('click',
//       function onClick(event)
//       {
//            if(event.target.id == '#random_id')
//            {
//             var tableInfo = document.getElementById('table_info');
//             var rowCount = tableInfo.rows.length;
//             var colCount = tableInfo.rows[0].cells.length;
        
        
            
        
//             var row = tableInfo.insertRow(rowCount);
        
//             for (let i = 0; i < colCount; i++) {
//                 row.insertCell(i);
//             }


            
        
//             var row = tableInfo.rows;
        
        
//             let i = 0;
        
//             for (let j = 0; j < row.length; j++) {
//                 row[j].insertCell(colCount);
        
//             }

//            }

//            var totalCount = rowCount*colCount;


//            for(let i=0;i<totalCount;i++)
//            {
//                allTd[i].setAttribute("id","id_1"+i);
//            }


//            console.log(event.target.id);
//       }
    
//     );
// }

// function AddRowCol(event) {

//     randomColor();

// }




