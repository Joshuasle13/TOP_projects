
function wholegame(){
    let play = window.prompt('Do you want to play? Y/N');
    let Wchoice = play.toLowerCase()

    if (Wchoice === 'y'){
        rps()
    } else if(Wchoice === 'n'){
        alert('Too bad')
    }bAns()
}
function bAns(){
    if(wholegame() === 'Too bad'){
        wholegame()
    }
}

var humanScore = 0;
var computerScore = 0;
function game (humanChoice, computerChoice) {

 

    humanChoice.toLowerCase()
    computerChoice.toLowerCase()
 
           if(humanChoice === computerChoice){
               alert (`${humanChoice} vs ${computerChoice} = Draw`);
             }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
               alert (`${humanChoice} vs ${computerChoice} = You win, Rock beats Scissors`), humanScore++ ; 
           }else if(humanChoice === 'rock' && computerChoice === 'paper'){
               alert(`${humanChoice} vs ${computerChoice} = You loose, Paper beats Rock`), computerScore++;    
    
           }else if(humanChoice === 'paper' && computerChoice === 'rock'){
               alert (`${humanChoice} vs ${computerChoice} = You win, Paper beats Rock`), humanScore++;
           }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
               alert ('You loose, Scissors beats Paper'), computerScore++;
         
           }else if(humanChoice === 'scissor' && computerChoice === 'paper'){
               alert (`${humanChoice} vs ${computerChoice} = You win, Scissors, beats Paper`), humanScore++;
           }else if(humanChoice === 'scissor' && computerChoice === 'rock'){
              alert (`${humanChoice} vs ${computerChoice} = You loose, Rock beats Scissors`), computerScore++;}
              else if(humanChoice ==='scissor'||'scissors' && computerChoice === 'scissors'){
                alert(`${humanChoice} vs ${computerChoice} = Draw`);
              }
alert(`Human ${humanScore}, Computer ${computerScore}`)

if(humanScore === 5){
    alert('you won'), humanScore = 0, computerScore = 0;
}else if(computerScore === 5){
    alert('you lost'), computerScore = 0, computerScore = 0;
}else if(humanScore === 5 && computerScore === 5){
    alert(`It's a draw`), computerScore = 0, computerScore = 0;
}


console.log(humanScore, computerScore)
    } 
function rps(){

    function getComputerChoice(){
        let num = Math.floor(Math.random()* 3) + 1;
        if (num === 1){
            return 'scissors'
        }else if ( num === 2) {
            return 'rock'
        } else if(num === 3 ) {
            return 'paper'
        }
    }
    

let answer = window.prompt( '¿what are you going to choose?')

let choice = answer.toLowerCase();


function getHumanChoice(){
    
  if(choice === 'rock'||choice  === 'paper'|| choice === 'scissor' || 'scissors'){
    return choice
  }else return 'Not an option'
}
 
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


game(humanChoice, computerChoice) 



}



wholegame()




