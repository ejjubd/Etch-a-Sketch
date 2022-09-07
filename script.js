const body = document.querySelector('body');
const eraseButton = document.querySelector('#erase-button');
const colorMode = document.querySelector('#color-mode');
const clearButton = document.querySelector('#clear-button');
const rainbowMode = document.querySelector('#rainbow-mode')
const colorPicker = document.querySelector('#color-picker')



const container = document.querySelector('.grid-container')

let colour = []
let value = '#333333'
for(let i=0;i<=256;i++){
    let el = document.createElement('div')
    el.className = 'grid-element'
    colour.push(el)
    container.appendChild(el)
}


let canDraw = false
    window.addEventListener('mousedown', function(){
        canDraw = true
    })
    
    window.addEventListener('mouseup', function(){
        canDraw = false
    })
 

   

   
      colorPicker.addEventListener('change', function(){
       
          value = document.getElementById('color-picker').value
        document.getElementById('erase-button').style.backgroundColor = 'grey'
        document.getElementById('clear-button').style.backgroundColor = 'grey';
        document.getElementById('rainbow-mode').style.backgroundColor = 'grey';
    }) 
        colour.forEach( function(element){
            element.addEventListener('mouseover', function(){
                     if(canDraw){
                         element.style.backgroundColor =  `${value}`;
                         
                     }
              })
              element.addEventListener('click', function(){
                 element.style.backgroundColor = `${value}` ;
                 })
                 
             })  
   
 
   
    eraseButton.addEventListener('click', function(){
         document.getElementById('erase-button').style.backgroundColor = 'black'
        
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

 
   

   
   
   
   
   
   
   
      

    clearButton.addEventListener('click', function(){
        document.getElementById('clear-button').style.backgroundColor = 'black';
       
        document.getElementById('erase-button').style.backgroundColor = 'grey';
        document.getElementById('rainbow-mode').style.backgroundColor = 'grey';
        colour.forEach(function(element){
            element.style.backgroundColor= 'white'
        })

    })

    rainbowMode.addEventListener('click',function(){
        document.getElementById('rainbow-mode').style.backgroundColor = 'black';
        document.getElementById('clear-button').style.backgroundColor = 'grey';
       
        document.getElementById('erase-button').style.backgroundColor = 'grey';
         colour.forEach( function(element){

            element.addEventListener('mouseover', function(){
                    if(canDraw){
                        const randomR = Math.floor(Math.random() * 256)
                        const randomG = Math.floor(Math.random() * 256)
                        const randomB = Math.floor(Math.random() * 256)
                        element.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
                        
                        
                    }
             })
             element.addEventListener('click', function(){
                    const randomR = Math.floor(Math.random() * 256)
                    const randomG = Math.floor(Math.random() * 256)
                     const randomB = Math.floor(Math.random() * 256)
                element.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
                
                
            
            
            })
            })  
    })
