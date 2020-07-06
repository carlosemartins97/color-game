var cores = [
    "rgb(255, 0, 0)"
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var quadrados = document.querySelectorAll(".quadrado");

for(var i = 0; i > quadrados.length; i++) {
    quadrados[i].style.backgroundColor = cores[i];
}