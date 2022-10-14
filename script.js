const body = document.querySelector('body');
const eraseButton = document.querySelector('#erase-button');
const colorMode = document.querySelector('#color-mode');
const clearButton = document.querySelector('#clear-button');
const rainbowMode = document.querySelector('#rainbow-mode');
const colorPicker = document.querySelector('#color-picker');
const container = document.querySelector('.grid-container');
const gridSize = document.querySelector('#sizeSlider');


let colour = [];

  let inputValue = document.getElementById("sizeSlider").value;

for(let i=1;i< 256;i++){
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



let defaultColor = document.getElementById('color-picker').value  
colour.forEach( function(element){
        element.addEventListener('mouseover', function(){
                 if(canDraw){
                     element.style.backgroundColor =  `${defaultColor}`;
                     
                 }
          })
          element.addEventListener('click', function(){
             element.style.backgroundColor = `${defaultColor}` ;
             })
             
         })  



colorMode.addEventListener('click', function(){
    let newColor = document.getElementById('color-picker').value
    document.getElementById('color-mode').style.backgroundColor = 'rgb(39, 4, 4)';
    document.getElementById('erase-button').style.backgroundColor = 'rgb(201, 116, 83)';
    document.getElementById('clear-button').style.backgroundColor = 'rgb(201, 116, 83)';
    document.getElementById('rainbow-mode').style.backgroundColor = 'rgb(201, 116, 83)';
    colour.forEach( function(element){
        element.addEventListener('mouseover', function(){
                 if(canDraw){
                     element.style.backgroundColor =  `${newColor}`;
                     
                 }
          })
          element.addEventListener('click', function(){
             element.style.backgroundColor = `${newColor}` ;
             })
             
         })  

})

colorPicker.addEventListener('change', function(){
        let newColor = document.getElementById('color-picker').value
        document.getElementById('erase-button').style.backgroundColor = 'rgb(201, 116, 83)';
        document.getElementById('clear-button').style.backgroundColor = 'rgb(201, 116, 83)';
        document.getElementById('rainbow-mode').style.backgroundColor = 'rgb(201, 116, 83)';
        document.getElementById('color-mode').style.backgroundColor = 'rgb(39, 4, 4)';
   
        colour.forEach( function(element){
            element.addEventListener('mouseover', function(){
                     if(canDraw){
                         element.style.backgroundColor =  `${newColor}`;
                         
                     }
              })
              element.addEventListener('click', function(){
                 element.style.backgroundColor = `${newColor}` ;
                 })
                 
             })  
   
            }) 
   
eraseButton.addEventListener('click', function(){
         document.getElementById('erase-button').style.backgroundColor = 'rgb(39, 4, 4)'
         document.getElementById('color-mode').style.backgroundColor = 'rgb(201, 116, 83)';
         document.getElementById('clear-button').style.backgroundColor = 'rgb(201, 116, 83)';
         document.getElementById('rainbow-mode').style.backgroundColor = 'rgb(201, 116, 83)';
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
        document.getElementById('clear-button').style.backgroundColor = 'rgb(39, 4, 4)';
        document.getElementById('color-mode').style.backgroundColor = 'rgb(201, 116, 83)';
        document.getElementById('erase-button').style.backgroundColor = 'rgb(201, 116, 83)';
        document.getElementById('rainbow-mode').style.backgroundColor = 'rgb(201, 116, 83)';
        colour.forEach(function(element){
            element.style.backgroundColor= 'white'
        })

    })

rainbowMode.addEventListener('click',function(){
        document.getElementById('rainbow-mode').style.backgroundColor = 'rgb(39, 4, 4)';
        document.getElementById('clear-button').style.backgroundColor = 'rgb(201, 116, 83)';
         document.getElementById('color-mode').style.backgroundColor = 'rgb(201, 116, 83)';
        document.getElementById('erase-button').style.backgroundColor = 'rgb(201, 116, 83)';
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
    
    
 function removeGrid () {
        while(container.firstChild) {
           container.removeChild(container.firstChild); } 
    }   

    gridSize.addEventListener('change', function(){
        removeGrid();
        let inputValue = document.getElementById("sizeSlider").value;
        document.getElementById("grid-size-text").innerHTML = ` Grid size: <span class="grid-number-value"> ${inputValue} x ${inputValue} </span>` ; 
       
        for(let i=0 ;i < `${(inputValue)*(inputValue)}` ;i++){
            let el = document.createElement('div')
            el.className = 'grid-element'
            colour.push(el)
            container.appendChild(el)
            document.getElementById('grid-container').style.gridTemplateColumns = ` repeat(${inputValue}, 1fr)`
            document.getElementById('grid-container').style.gridTemplateRows = ` repeat(${inputValue}, 1fr)`
        }
        
        let newColor = document.getElementById('color-picker').value  
        colour.forEach( function(element){
                element.addEventListener('mouseover', function(){
                         if(canDraw){
                             element.style.backgroundColor =  `${newColor}`;
                             
                         }
                  })
                  element.addEventListener('click', function(){
                     element.style.backgroundColor = `${newColor}` ;
                     })
                     
                 })  
     
    })
