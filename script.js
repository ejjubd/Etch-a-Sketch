const body = document.querySelector('body');
const colour = document.querySelectorAll('.grid-element');
const eraseButton = document.querySelector('#erase-button');
const colorMode = document.querySelector('#color-mode');

let canDraw = false
    window.addEventListener('mousedown', function(){
        canDraw = true
    })
    
    window.addEventListener('mouseup', function(){
        canDraw = false
    })



    
    
   
   
    eraseButton.addEventListener('click', function(){
         document.getElementById('erase-button').style.backgroundColor = 'black'
        colour.forEach( function(element){
                 element.addEventListener('mouseover', function(){
                    if(canDraw){
                        element.style.backgroundColor = "white"; 
                        }
             })
                 element.addEventListener('click', function(){
                element.style.backgroundColor = "white";
                })
            })  
   })



   
     colorMode.addEventListener('click', function(){
        colour.forEach( function(element){

            element.addEventListener('mouseover', function(){
                    if(canDraw){
                        element.style.backgroundColor = "blue";
                        
                    }
             })
             element.addEventListener('click', function(){
                element.style.backgroundColor = "red";
                
            
            
            })
            })  
   
   
   
    })



