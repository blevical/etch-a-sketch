const newDiv = document.getElementById("container");
const button = document.querySelector("button");
const rows = document.getElementsByClassName("row")

function makeSquares(){
    for (let i = 0; i < 16 * 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);    
    }
}
function makeGrid () {
    for (let j = 0; j < 16; j++) {
        let column = document.createElement("div")
        let row = document.createElement("div")
        column.classList.add("column")
        row.classList.add("row")
        column.appendChild(row)
        newDiv.appendChild(column)
    }
}
makeGrid(makeSquares)