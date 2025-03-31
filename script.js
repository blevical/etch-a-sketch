const newDiv = document.getElementById("container");
const button = document.querySelector("button");


function createSquares() {
    for (let i = 0; i < 16 * 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        newDiv.appendChild(square); 
    }
}
createSquares();
button.addEventListener("click", createSquares);

function sketch() {
    addEventListener("mouseover", square)
    
}