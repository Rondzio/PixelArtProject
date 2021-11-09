// Select color input
var colorInput = document.querySelector('#colorPicker').value;
// Select size input
var gridHeight;
var gridWidth;

// Grid element
const grid = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    gridHeight = document.querySelector('#inputHeight').value;
    gridWidth = document.querySelector('#inputWidth').value;
    makeGrid(gridHeight, gridWidth);
})

// listener function for clicked cell
function colorCell(event) {
    let cell = event.target;
    // in case it was changed
    colorInput = document.querySelector('#colorPicker').value;
    if (cell.tagName === 'TD') {
        cell.style.backgroundColor = colorInput;
    }
}


function makeGrid(rows, columns) {
// Your code goes here!
// clear old grid
grid.innerHTML = "";
// create new grid
for (let i = 1; i <= rows; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= columns; j++) {
        let cell = document.createElement("td");
        cell.addEventListener('click', colorCell);
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

}
