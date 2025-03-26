let newDiv = document.createElement("div");
let square = document.createElement("div");
const squares = document.querySelectorAll(".square");
const createbutton = document.createElement("createButton")
newDiv.id = "container"
    newDiv.className = "square"
console.log(square)
squares.forEach(square => {
    square.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    });

    square.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });
});

