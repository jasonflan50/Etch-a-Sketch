// Javascript for the Etch-a-Sketch
// Create a variable to track the main div
const EaS = document.getElementById('etchaSketch');

function resizeGrid (instantiator){
    let size = instantiator;
    let gridSize = size * size;
    let iterator = 0;

    while (iterator < gridSize){
        // Alter Etch-A-Sketch grid dimensions
        EaS.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        EaS.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        // Create a div
        let div = document.createElement('div');
        // Apply attributes
        div.classList.add('easNode');
        div.style.backgroundColor = 'white';
        div.style.height = '1fr';
        div.style.width = '1fr';
        // Add event listener for hover
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
        // Inject div to html
        EaS.appendChild(div);
        iterator++;
    }
}

resizeGrid(24);

// Create a variable to set new dimensions for the Etch-a-Sketch
//const pixSize = document.getElementById('pixSubmit').addEventListener('click', () => {
//    const gridDimensions = document.getElementById('pix');
//    
//});

// Create a function to reset the Etch-a-Sketch
function resetGrid() {
    const resetDivs = document.getElementsByClassName('easNode');
    for (let i = 0; i < resetDivs.length; i++) {
        resetDivs[i].style.backgroundColor = 'white';
    }
};

const reset = document.getElementById('reset').addEventListener('click', resetGrid);

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;


const resize = document.getElementById('resize').addEventListener('click', () => {
    output.innerHTML = slider.value;
    resetGrid();
    resizeGrid(slider.value);
})
/*slider.oninput = function() {
  output.innerHTML = this.value;
  resizeGrid(this.value);
}*/



