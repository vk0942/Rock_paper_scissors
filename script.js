function getComputerChoice()
{
    let pick = Math.floor(Math.random()*3)+1; 
    if(pick === 1) return "rock";
    if(pick === 2) return "paper";
    if(pick === 3) return "scissor";
    return "scissor";
}

// function playerSelection(playerpick)
// {
//   if(playerpick==null||playerpick==undefined) return undefined;
//   if(typeof playerpick != "string") return "INVALID INPUT";
//   let pick = playerpick.toLowerCase();
//   if(pick=='')
//   {
//     return null;
//   }
//   if(pick=="rock"||(pick=="paper"||pick=="scissor"))  return pick ;
//   return null;

// }

function playRound(playerselection,computerselection)
{
    let winner;
   if(playerselection=="rock")
   {
     if(computerselection=="scissor")  winner = "YOU"; 
     else if(computerselection=="paper") winner = "COMPUTER";
     else if(computerselection=="rock") winner = "DRAW";
    
   }else if(playerselection=="paper")
   {
    if(computerselection=="rock") winner = "YOU";
    else if (computerselection=="scissor") winner = "COMPUTER";
    else if(computerselection=="paper") winner = "DRAW";
   
   }else if(playerselection=="scissor")
   {
    if(computerselection=="paper") winner = "YOU";
    else if (computerselection=="rock") winner = "COMPUTER";
    else if(computerselection=="scissor") winner = "DRAW";
   
   }else{
    winner = null;
   }
   if(winner!=null)
   {
    if(winner=="DRAW") return "It's a DRAW";
    return `WOW ! ${winner} won`;
   }else{
    return null;
   }
}
let game = true;
const body = document.querySelector('body');
const RESULT = document.querySelector(".result");
const SCORE = document.querySelector(".score");
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const play_again = document.createElement('button');
let x = 0;
let y = 0;
function outputs(wep)
{
  if(game)
  {
    const result =  playRound(wep,getComputerChoice());
    if(result==="WOW ! YOU won") x++;
    else if(result==="WOW ! COMPUTER won") y++;
    
      RESULT.textContent = result;
      SCORE.textContent = x + " "+ y;
    
    if(x==5)
    {
      RESULT.textContent = "CONGRATS YOU ARE THE ULTIMATE WINNER";
      game = false;
      
      play_again.textContent = " PLAY AGAIN! "
      body.appendChild(play_again);
    }
    if(y==5)
    {
      RESULT.textContent = "Sorry ! YOU LOSE";
      game = false;
     
      play_again.textContent = " PLAY AGAIN! "
      body.appendChild(play_again);
      
    }
  }

 
}
function Reset()
{
  body.removeChild(play_again);
  x = 0;
  y = 0;
  game = true;
  RESULT.textContent = "";
  SCORE.textContent = '';
}

  scissor.addEventListener('click',() =>{
    outputs("scissor");
  });
   rock.addEventListener('click',() =>{
    outputs("rock");
  });
  paper.addEventListener('click',() =>{
    outputs("paper");
  });
  
  play_again.addEventListener('click', Reset);



// function game()
// {
  
//    let playerscore = 0;
//    let computerscore = 0;
  
//    for(let t = 5;t>0;t--)
//    {
//     let player = prompt("Pick your weapon : -",);
//     let message = playRound(playerSelection(player) , getComputerChoice());
//     if(message!=null)
//     {
//         if(message==="WOW ! YOU won")  playerscore++;
//         if(message==="WOW ! COMPUTER won") computerscore++;
//         console.log(message +'\n');
//         console.log("Score :-");
//         console.log(playerscore + " " + computerscore);
       
//     }else{
//         console.log("ERROR Wrong INPUT");
//         t++;
//     }
//     console.log("CHANCES LEFT " + t);
//     console.log('\n');
//     console.log('\n');
    
//    }
 
//    if(playerscore>computerscore)
//    {
//     console.log("Congrats YOU are the ULTIMATE WINNER")
//    }else if (playerscore<computerscore)
//    {
//     console.log("Sorry You lost");
//    }else if(playerscore===computerscore){
//     console.log("OHHHH IT is a tie")
//    }
//     console.log('Final Score');
//     console.log(playerscore + " " + computerscore);
// }

// for(var i = 0; i< 7 ; i++) console.log(getComputerChoice());
