let box = document.getElementById("box");
let genbtn = document.getElementById("btn");
let colors = ["red", "yellow", "blue", "pink", "green", "black", "grey", "purple"];

function randomColor() {
    // Pick a valid random index for the colors array
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

genbtn.addEventListener("click", function() {
    let color = randomColor();
    box.style.backgroundColor = color;
});
