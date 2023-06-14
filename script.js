function getComputerChoice()
{
    let pick = Math.floor(Math.random()*3)+1; 
    if(pick === 1) return "rock";
    if(pick === 2) return "paper";
    if(pick === 3) return "scissor";
    return null;
}

function playerSelection(playerpick)
{
  if(playerpick==null||playerpick==undefined) return undefined;
  if(typeof playerpick != "string") return "INVALID INPUT";
  let pick = playerpick.toLowerCase();
  if(pick=='')
  {
    return null;
  }
  if(pick=="rock"||(pick=="paper"||pick=="scissor"))  return pick ;
  return null;

}

function playRound(playerselection,computerselection)
{
    let winner;
   if(playerselection=="rock")
   {
     if(computerselection=="scissor")  winner = "YOU"; 
     else if(computerselection=="paper") winner = "COMPUTER";
     else winner = null;
   }else if(playerselection=="paper")
   {
    if(computerselection=="rock") winner = "YOU";
    else if (computerselection=="scissor") winner = "COMPUTER";
    else winner = null;
   }else if(playerselection=="scissor")
   {
    if(computerselection=="paper") winner = "YOU";
    else if (computerselection=="rock") winner = "COMPUTER";
    else winner = null;
   }else{
    winner = null;
   }
   if(winner!=null)
   {
    return `WOW ! ${winner} won`;
   }else{
    return null;
   }
}
function game()
{
  
   let playerscore = 0;
   let computerscore = 0;
  
   for(let t = 5;t>0;t--)
   {
    let player = prompt("Pick your weapon : -",);
    let message = playRound(playerSelection(player) , getComputerChoice());
    if(message!=null)
    {
        if(message==="WOW ! YOU won")  playerscore++;
        if(message==="WOW ! COMPUTER won") computerscore++;
        console.log(message +'\n');
        console.log("Score :-");
        console.log(playerscore + " " + computerscore);
       
    }else{
        console.log("ERROR Wrong INPUT");
        t++;
    }
    console.log("CHANCES LEFT " + t);
    console.log('\n');
    console.log('\n');
    
   }
 
   if(playerscore>computerscore)
   {
    console.log("Congrats YOU are the ULTIMATE WINNER")
   }else if (playerscore<computerscore)
   {
    console.log("Sorry You lost");
   }else if(playerscore===computerscore){
    console.log("OHHHH IT is a tie")
   }
    console.log('Final Score');
    console.log(playerscore + " " + computerscore);
}
game();
// for(var i = 0; i< 7 ; i++) console.log(getComputerChoice());
