

const   rock    =   document.getElementById('btn1');
const   paper   =   document.getElementById('btn2');
const   scissor =   document.getElementById('btn3');
let selection   =   document.getElementById('selected')
let computer    =   document.getElementById('computer')





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
        num =   'Rock';
     
        
       
      
        if( num === cchoice){
            alert ('draw')
        }else if(num !== cchoice && cchoice=== 'Scissor'){
            alert(`${num} vs ${cchoice}, you win`),   humanScore++;
        }else if(num !== cchoice && cchoice=== 'Paper'){
            alert(`${num} vs ${cchoice}, you lose`),  computerScore++ ;}
            console.log(humanScore,computerScore);
            if(humanScore   === 5){
                alert('you won'),   humanScore    =   0,    computerScore  =   0;
            }else if(computerScore  ===  5){
                alert('you lost'),  humanScore    =   0, computerScore   =   0;
            }
      })
  
    paper.addEventListener('click',()=>{
        let cchoice = getComputerChoice();
        num =   'Paper';
       
        
       

        if( num === cchoice){
            alert ('draw')
        }else if(num !== cchoice && cchoice=== 'Scissor'){
            alert(`${num} vs ${cchoice}, you lose`),  computerScore++;
        }else if(num !== cchoice && cchoice=== 'Rock'){
            alert(`${num} vs ${cchoice}, you win`),   humanScore++; }
            console.log(humanScore,computerScore);
            if(humanScore   === 5){
                alert('you won'),   humanScore    =   0,    computerScore  =   0;
            }else if(computerScore  ===  5){
                alert('you lost'),  humanScore    =   0, computerScore   =   0;
            };
            
        })
  
    scissor.addEventListener('click',()=>{
        let cchoice = getComputerChoice();
        num =   'Scissor';
      
    

        if( num === cchoice){
            alert ('draw')
        }else if(num !== cchoice && cchoice=== 'Rock'){
            alert(`${num} vs ${cchoice}, you lose`),  computerScore++;
        }else if(num !== cchoice && cchoice=== 'Paper'){
            alert(`${num} vs ${cchoice}, you win`),   humanScore++;}
            console.log(humanScore,computerScore);
            if(humanScore   === 5){
                alert('you won'),   humanScore    =   0,    computerScore  =   0;
            }else if(computerScore  ===  5){
                alert('you lost'),  humanScore    =   0, computerScore   =   0;
            }
        })
        
       
      
        
    }

    

evento()