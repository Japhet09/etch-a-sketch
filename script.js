
//The container created from HTNL
const container= document.querySelector('.container')

//Creates the square divs and append to the container
let grid = 50;
for(i=0; i<grid*grid;i++){
    const div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div)
    
    // change the grid style depending on the number of squares

    container.style.gridTemplateRows = `repeat(${grid},1fr)`
    container.style.gridTemplateColumns = `repeat(${grid},1fr)`
}
