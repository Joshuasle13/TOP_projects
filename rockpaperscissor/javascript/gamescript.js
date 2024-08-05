

const   rock    =   document.getElementById('btn1');
const   paper   =   document.getElementById('btn2');
const   scissor =   document.getElementById('btn3');
let selection   =   document.getElementById('selected');
let computer    =   document.getElementById('computer');
let reset       =   document.getElementById('reset');
let hScore      =   document.getElementById('humScore');
let cScore      =   document.getElementById('comScore');

function updateScore (){
hScore.innerHTML    =   humanScore;
cScore.innerHTML    =   computerScore;
selection.removeChild()
computer.removeChild()
}


function getComputerChoice  (){
    let numC =   Math.floor(Math.random()*3) +1;
    if(numC  === 1){
        return  'Rock'
    }else   if(numC  === 2){
        return  'Paper'
    }else   if(numC  === 3){
        return  'Scissor'
    }
    }
     
  




     var    humanScore  =   0;
     var    computerScore   =   0;

function evento(){
   
   

 
    rock.addEventListener('click',()=>{
        
        let cchoice = getComputerChoice();
        let humanchoice   =  document.createElement('span');
        humanchoice.textContent =   ' - Rock -';
        selection.appendChild(humanchoice)
        num =   'Rock';
        let dcoputer    =   document.createElement('span');
        dcoputer.textContent    =   ` - ${cchoice} -`
        computer.appendChild(dcoputer)

        
      
        if( num === cchoice){
            alert ('draw')
        }else if(num !== cchoice && cchoice=== 'Scissor'){
            alert('you win'),   humanScore++;
        }else if(num !== cchoice && cchoice=== 'Paper'){
            alert('you lose'),  computerScore++ ;}
            console.log(humanScore,computerScore);
            if(humanScore   === 5){
                alert('you won'),   humanScore    =   0,    computerScore  =   0;
            }else if(computerScore  ===  5){
                alert('you lost'),  humanScore    =   0, computerScore   =   0;
            } updateScore();
      })

  
  
    paper.addEventListener('click',()=>{
        let cchoice = getComputerChoice()
        let humanchoice   =  document.createElement('span');
        humanchoice.textContent=   ' - Paper -';
        selection.appendChild(humanchoice);
        num =   'Paper';
        let dcoputer    =   document.createElement('span');
        dcoputer.textContent    =   ` - ${cchoice} -`;
        computer.appendChild(dcoputer);
        
       

        if( num === cchoice){
            alert ('draw')
        }else if(num !== cchoice && cchoice=== 'Scissor'){
            alert('you lose'),  computerScore++;
        }else if(num !== cchoice && cchoice=== 'Rock'){
            alert('you win'),   humanScore++; }
            console.log(humanScore,computerScore);
            if(humanScore   === 5){
                alert('you won'),   humanScore    =   0,    computerScore  =   0;
            }else if(computerScore  ===  5){
                alert('you lost'),  humanScore    =   0, computerScore   =   0;
            } updateScore();
            
        })
  
    scissor.addEventListener('click',()=>{
        let cchoice = getComputerChoice()
        let humanchoice   =  document.createElement('span');
        humanchoice.textContent=   ' - Scissor -';
        selection.appendChild(humanchoice);
        num =   'Scissor';
        let dcoputer    =   document.createElement('span');
        dcoputer.textContent    =   ` - ${cchoice} -`;
        computer.appendChild(dcoputer);
    

        if( num === cchoice){
            alert ('draw')
        }else if(num !== cchoice && cchoice=== 'Rock'){
            alert('you lose'),  computerScore++;
        }else if(num !== cchoice && cchoice=== 'Paper'){
            alert('you win'),   humanScore++;}
            console.log(humanScore,computerScore);
            if(humanScore   === 5){
                alert('you won'),   humanScore    =   0,    computerScore  =   0;
            }else if(computerScore  ===  5){
                alert('you lost'),  humanScore    =   0, computerScore   =   0;
            } updateScore();

            
        })
        
       
        reset.addEventListener('click', ()=>{
            location.reload()
        })
        
    }

    

evento()