
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
defaultButton.textContent = '16 X 16'
main.prepend(defaultButton)

defaultButton.addEventListener('click',()=>{ 
    defaultGrid();
    allSquares();
    changeColor();
})

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
newGrid.textContent = 'CHOOSE'
main.prepend(newGrid)
newGrid.addEventListener('click',()=>{
    setNewGrid()
    allSquares()
    changeColor()
})



function setNewGrid (){
   
    let grid = prompt('Enter the number of  sqaures: NOT MORE THAN 64:');
    clearGrid()
    for(i=0; i<grid*grid;i++){
        const div = document.createElement('div')
        div.classList.add('square')
        container.appendChild(div)
        
        // change the grid style depending on the number of squares
    
        container.style.gridTemplateRows = `repeat(${grid},1fr)`
        container.style.gridTemplateColumns = `repeat(${grid},1fr)`
    

        //* Everytime sqaures are created;select all sqaures and add event
        allSquares()
        changeColor()

    }

}

//Get all the sqaures everytime new squares are created
let squares;
function allSquares(){
squares = document.querySelectorAll('.square')
}
allSquares()

function changeColor(){
squares.forEach((square)=>{
    square.addEventListener('mouseover',event=>{
        let randomR = Math.floor(Math.random()*256)
        let randomG = Math.floor(Math.random()*256)
        let randomB = Math.floor(Math.random()*256)
        event.target.style.backgroundColor= `rgb(${randomR},${randomG},${randomB})`
    


    })
    

})

}
changeColor()


