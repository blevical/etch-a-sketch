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
clear.addEventListener("click", clearSquares);

function sketch() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover",() => {
            square.style.backgroundColor = "blue";
            
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "black";
        }
        )
        });
    });
    
}
sketch(createSquares(button.addEventListener("click", createSquares)));

function clearSquares () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
    })
}