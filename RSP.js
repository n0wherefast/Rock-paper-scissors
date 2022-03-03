
function computerPlay(){


let randomNumber = Math.floor(Math.random()*3);
switch(randomNumber){
    case 0:
        return "rock"
        
    case 1:
        return "paper"
    
    case 2:
        return "scissors"
 }
} 
let computerSelection = computerPlay() ;


  function capitalizePc(){
  const box = computerSelection;
  const low = box.toLowerCase();//
  const first = low.slice(0,1);//
  const up = first.toUpperCase(); //
  const rep = low.replace(first,up) // 
  return rep
  
  
}

computerSelection = capitalizePc()
console.log( "computer:" , computerSelection);
 


function capitalize(){
  const box =prompt("inserisci parola");
  const low = box.toLowerCase();//
  const first = low.slice(0,1);//
  const up = first.toUpperCase(); //
  const rep = low.replace(first,up) // 
  return rep
  
  
}

let  playerSelection = capitalize()




   
   console.log("Player:" , playerSelection)

  function playRound(){
        

        if(computerSelection == "Rock" && playerSelection == "Paper"){
            
          return "You Win"

        }else if(computerSelection === "Paper" && playerSelection == "Scissors"){
            
            return "You Win"

          }else if(computerSelection == "Scissors" && playerSelection == "Rock"){

        return "You Win"

         }else if(computerSelection == "Scissors" && playerSelection == "Paper"){
            
            return "You Lose"

          }else if(computerSelection == "Paper" && playerSelection == "Rock"){

             return "You Lose"

        }else if(computerSelection == "Rock" && playerSelection == "Scissors"){

            return "You Lose"

       }else {return "Tie"}
        
    
    }
playRound()
console.log("Round" , playRound())
alert( playRound())

  let playerScore = 0;
  let computerScore = 0;

function game(){

  if (playRound() == "You Win"){
    return  computerScore++
  }else if (playRound() == "You Lose"){
    return  computerScore++
  
}
}

game()
console.log("player:" , playerScore)
console.log("computer:" , computerScore)
console.log(game())



for(i=0; i<5; i++){
  i=game()
  console.log(i)
}







