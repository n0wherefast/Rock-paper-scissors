
function computerPlay(){


let randomNumber = Math.floor(Math.random()*3);
console.log(randomNumber)
switch(randomNumber){
    case 0:
        return "Rock"
        
    case 1:
        return "Paper"
    
    case 2:
        return "Scissors"
 }
} 
let computerSelection = computerPlay() ;
console.log( "computer:" , computerSelection);

 let  playerSelection =  prompt("inserisci")



   
   console.log("Player:" , playerSelection)

  function playRound(){

        if(computerSelection == "Rock" && playerSelection == "Paper"){
            
          return "You Win"

        }else if(computerSelection === "Paper" && playerSelection == "Scissors"){
            
            return "You Win"

          }else if(computerSelection == "Paper" && playerSelection == "Rock"){

        return "you Win"

         }else if(computerSelection == "Scissors" && playerSelection == "Paper"){
            
            return "You Lose"

          }else if(computerSelection == "Paper" && playerSelection == "Rock"){

             return "you lose "

        }else if(computerSelection == "Rock" && playerSelection == "Scissors"){

            return "you lose "

       }else {return "Tie"}
        
    
    }
playRound()
console.log("Round" , playRound())
alert( playRound())




