function getComputerChoice (){
   let num = Math.floor(Math.random() * 3) + 1;
   if(num === 3){
    return 'Rock'
   } else if ( num === 2 ) {
    return 'Paper'
   } else if ( num === 1 ) {
    return 'Scissor'
   }
}