
//The container created from HTNL
const container= document.querySelector('.container')

const main = document.querySelector('main')

//Creates the square divs and append to the container

function defaultGrid(){
    clearGrid()
    let grid = 16;//prompt('Enter the number of  sqaures:');

for(i=0; i<grid*grid;i++){
    const div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
    
    // change the grid style depending on the number of squares

    container.style.gridTemplateRows = `repeat(${grid},1fr)`
    container.style.gridTemplateColumns = `repeat(${grid},1fr)`

}

}
defaultGrid()

const defaultButton =document.createElement('button')
defaultButton.classList.add('button');
defaultButton.textContent = 'DEFAULT'
main.prepend(defaultButton)

defaultButton.addEventListener('click', defaultGrid)

const clearButton =document.createElement('button')
clearButton.classList.add('button');
clearButton.textContent = 'CLEAR'


main.prepend(clearButton)

clearButton.addEventListener('click',clearGrid)

function clearGrid(){
    container.innerHTML =''

}
const newGrid = document.createElement('button')
newGrid.classList.add('button');
newGrid.textContent = 'NEW GRID'
main.prepend(newGrid)



const setNewGrid = function(){
   
    let grid = prompt('Enter the number of  sqaures:');
    clearGrid()
    for(i=0; i<grid*grid;i++){
        const div = document.createElement('div')
        div.classList.add('square')
        container.appendChild(div)
        
        // change the grid style depending on the number of squares
    
        container.style.gridTemplateRows = `repeat(${grid},1fr)`
        container.style.gridTemplateColumns = `repeat(${grid},1fr)`
    
    }

}

newGrid.addEventListener('click', setNewGrid)

const squares = document.querySelectorAll('.square')

/*
squares.forEach(square=>{
    square.addEventListener('mouseover',event=>{
        event.target.style.backgroundColor='blue'
    })

})
*/
squares.forEach(square=>{
    square.addEventListener('mouseover',event=>{
        let randomR = Math.floor(Math.random()*256)
        let randomG = Math.floor(Math.random()*256)
        let randomB = Math.floor(Math.random()*256)
        event.target.style.backgroundColor= `rgb(${randomR},${randomG},${randomB})`
    })

})




