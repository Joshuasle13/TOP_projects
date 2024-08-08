if (typeof document !== 'undefined') {
    let element =   document.querySelector('.class-name')
    let sketch  =   document.getElementById('sketch') 
    

    
    

function    asketch(size){

    




    for(let i   =   0;  i   <=  size; i++)  {
        var columns =   document.createElement('div')
        columns.classList.add('column')
        columns.style.border    =   'solid black 1px';
        columns.style.width     =   '15px';
        columns.style.height    =   '15px';
        columns.style.margin    =   '1px';
        
  
        
        sketch.appendChild(columns)

    
        
    }
   
let column  =   document.getElementsByClassName('column');


    for(let    j   =   0;  j   <=  size;   j++){
        var row =   document.createElement('div');
        row.classList.add('row');
        row.style.border    = 'solid black 1px';
        row.style.width     = '15px';
        row.style.height    = '15px';
        row.style.margin    ='1px';
       
     
               
        sketch.appendChild(row);
        
    }
    
    
        
}


asketch(80)




    
 }
