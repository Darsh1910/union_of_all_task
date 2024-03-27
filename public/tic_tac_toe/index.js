
var boxes = document.querySelectorAll('.box');
var gamebtn  = document.querySelector('.game-btn');
var gameInfo = document.querySelector('#player_info');
var winnerStatus = document.querySelector('.game_status');
var counter = 0;



let winPosition = [[0,1,2],
                   [3,4,5],
                   [6,7,8],
                   [0,3,6],
                   [1,4,7],
                   [2,5,8],
                   [0,4,8],
                   [2,4,6]];
let gameGrid;
let currentPlayer;

function initgame()
{
    gameGrid = ["","","","","","","","",""];
    currentPlayer = 'X';

    boxes.forEach((box,index)=>{
        boxes[index].innerText="";
         boxes[index].style.pointerEvents ="all";
    });


    gameInfo.innerText = `Current Player - ${currentPlayer}`;




}
 initgame();


 function checkGameOver()
 {
    // check if win position
    
    let answer ="";

     if(gameGrid[0]!== '')
     {

        winPosition.forEach((positon)=>{

            if( (gameGrid[positon[0]] !== "" || gameGrid[positon[1]] !== "" || gameGrid[positon[2]] !== "")
            && (gameGrid[positon[0]] === gameGrid[positon[1]] && gameGrid[positon[1]] === gameGrid[positon[2]] ))
            {
           
              answer = gameGrid[positon[0]];
              winnerStatus.innerText = `Winner is ${answer}`;


            //   gameGrid[positon[0]].classList.add('.win');
            //   gameGrid[positon[1]].classList.add('.win');
            //   gameGrid[positon[2]].classList.add('.win');

              
              
            // console.log(answer);
            
             boxes.forEach((box,index)=>{
                 boxes[index].style.pointerEvents ="none";

                 // console.log(box);
            });


             // gameGrid[positon[0]].style.background = 'green';
            //   gameGrid[positon[1]].classList.add('win');
            //   gameGrid[positon[2]].classList.add('win');

            console.log(gameGrid[positon[0]]);


 
            }
            if(counter===9)
            {
                winnerStatus.innerText = `Match is tie `;

            }


        });



     }

 }

function swapTurn()
{
    if(currentPlayer === 'X')
    {
        currentPlayer = '0';
    }

    else
    {
        currentPlayer = 'X';
    }

    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
 


function handleClick(index)
{
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = 'none';

    counter++;

    // swap turn
    swapTurn();

    // check game over or not
     checkGameOver();
}

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
})

gamebtn.addEventListener('click',initgame);













