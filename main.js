var cores = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var quadrados = document.querySelectorAll(".quadrado");
var corCerta = pegarCor();
var corDisplay = document.getElementById("corDisplay");
var msg = document.querySelector("#msg");

corDisplay.textContent = corCerta;

for(var i = 0; i < quadrados.length; i++){
    quadrados[i].style.backgroundColor = cores[i];

    quadrados[i].addEventListener("click", function(){
        var corClicada = this.style.backgroundColor;
        if(corClicada === corCerta){
            msg.textContent = "Correto!"
            mudarCores(corCerta);
        } else {
            this.style.backgroundColor = "#232323";
            msg.textContent = "Tente novamente!"
        }
    });
};

function mudarCores(cor){
    for(var i = 0; i < quadrados.length; i++){
        quadrados[i].style.backgroundColor = cor;
    };
};

function pegarCor(){
    var random = Math.floor(Math.random() * cores.length)
    return cores[random];
};