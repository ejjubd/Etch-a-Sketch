const body = document.querySelector('body');
const colour = document.querySelectorAll('.grid-element');
const eraseButton = document.querySelector('#erase-button');
const colorMode = document.querySelector('#color-mode');
const clearButton = document.querySelector('#clear-button');
const rainbowMode = document.querySelector('#rainbow-mode')
let canDraw = false
    window.addEventListener('mousedown', function(){
        canDraw = true
    })
    
    window.addEventListener('mouseup', function(){
        canDraw = false
    })



    
    
   
   
    eraseButton.addEventListener('click', function(){
         document.getElementById('erase-button').style.backgroundColor = 'black'
         document.getElementById('color-mode').style.backgroundColor = 'grey'
         document.getElementById('clear-button').style.backgroundColor = 'grey';
         document.getElementById('rainbow-mode').style.backgroundColor = 'grey';
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
        document.getElementById('color-mode').style.backgroundColor = 'black'
        document.getElementById('erase-button').style.backgroundColor = 'grey'
        document.getElementById('clear-button').style.backgroundColor = 'grey';
        document.getElementById('rainbow-mode').style.backgroundColor = 'grey';
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


    clearButton.addEventListener('click', function(){
        document.getElementById('clear-button').style.backgroundColor = 'black';
        document.getElementById('color-mode').style.backgroundColor = 'grey';
        document.getElementById('erase-button').style.backgroundColor = 'grey';
        document.getElementById('rainbow-mode').style.backgroundColor = 'grey';
        colour.forEach(function(element){
            element.style.backgroundColor= 'white'
        })

    })

    rainbowMode.addEventListener('click',function(){
        document.getElementById('rainbow-mode').style.backgroundColor = 'black';
        document.getElementById('clear-button').style.backgroundColor = 'grey';
        document.getElementById('color-mode').style.backgroundColor = 'grey';
        document.getElementById('erase-button').style.backgroundColor = 'grey';
         colour.forEach( function(element){

            element.addEventListener('mouseover', function(){
                    if(canDraw){
                        element.style.backgroundColor = "yellow";
                        
                    }
             })
             element.addEventListener('click', function(){
                element.style.backgroundColor = "yellow";
                
            
            
            })
            })  
    })