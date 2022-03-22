let = playerScore = 0
let = computerScore = 0

 const btns = document.querySelectorAll('div.OPB button');
 const gameBox = document.querySelector('.gameBox')
 const makeCh =document.querySelector('h2')
 

 const pSelct = document.createElement('p')
 const pcSelct =document.createElement('p')
 const round = document.createElement('p')
 const playerSco = document.createElement('p')
 const pcSco = document.createElement('p')
 



function computerPlay(){

let randomNumber = Math.floor(Math.random()*3);
switch(randomNumber){
    case 0:
        return "Rock"
        
    case 1:
        return "Paper"
    
    case 2:
        return "Scissors"
 }
} 


 /* function capitalizePc(){
  const box = computerSelection;
  const low = box.toLowerCase();//
  const first = low.slice(0,1);//
  const up = first.toUpperCase(); //
  const rep = low.replace(first,up) // 
  return rep
  
  
}

computerSelection = capitalizePc()

 


function capitalize(){
  const box =prompt("inserisci parola");
  const low = box.toLowerCase();//
  const first = low.slice(0,1);//
  const up = first.toUpperCase(); //
  const rep = low.replace(first,up) // 
  return rep
  
  
}*/

  function playRound(playerSelection , computerSelection){

        if(computerSelection == "Rock" && playerSelection == "Paper"){
          playerScore++; 
          
          return "Win" 

        }else if(computerSelection === "Paper" && playerSelection == "Scissors"){           
          playerScore++; 
          
          return "Win"
 
          }else if(computerSelection == "Scissors" && playerSelection == "Rock"){
          playerScore++;
          
            return "Win"

         }else if(computerSelection == "Scissors" && playerSelection == "Paper"){
            computerScore++
            return "Lose" 

          }else if(computerSelection == "Paper" && playerSelection == "Rock"){
            computerScore++
            return "Lose"

        }else if(computerSelection == "Rock" && playerSelection == "Scissors"){
          computerScore++
          return "Lose"

       }else {return "Tie" } 
       }


   



  btns.forEach((button)=> {
  button.addEventListener('click' ,()=>{
    
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    
    
    
    
    round.textContent =`${ playRound(playerSelection, computerSelection)}`
    gameBox.appendChild(round)
    round.setAttribute('class','modificaRound')

    pSelct.textContent =`Player:  ${playerSelection}`
    gameBox.appendChild(pSelct)
    pcSelct.setAttribute('class','modPlyer')


    playerSco.textContent =`Player Score:  ${playerScore}`
    gameBox.appendChild(playerSco)
    playerSco.setAttribute('class','modPlayer')

    pcSco.textContent =`Computer Score:  ${computerScore}`
    gameBox.appendChild (pcSco)
    pcSco.setAttribute('class','modPC')

    pcSelct.textContent =`Computer:  ${computerSelection}`
    gameBox.appendChild(pcSelct)
    pcSelct.setAttribute('class','modPC')
   
    
    checkWinner()
    gameBox.appendChild(makeCh)
    gameBox.removeChild(makeCh)
   }) 
}) 

function restart(){
const rest = document.querySelector('#rest');
rest.addEventListener('click',()=>{location.reload()})
}
restart()


function checkWinner(){
  if(playerScore===5){
    alert('WIN')
    restartGame()
   }else if(computerScore===5){
     alert('LOSE')
     restartGame()
}    
}


function restartGame(){
 
 btns.forEach(btn=>{
   btn.disabled = true
   
 })

}

