const newDiv = document.getElementById("container");
const button = document.querySelector("button");
const clearButton = document.getElementById("clear");

function createSquares() {
    for (let i = 0; i < 16 * 16; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        newDiv.appendChild(square);
        button.addEventListener("click", createSquares);
    }
    sketch();
}

function sketch() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "blue";
        });
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "black";
        });
    });
}


clearButton.addEventListener("click", clearSquares);

function clearSquares() {
    newDiv.innerHTML = "";
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
}

createSquares();