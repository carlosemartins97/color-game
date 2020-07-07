var cores = escolherCorAleatoria(6);
var quadrados = document.querySelectorAll(".quadrado");
var corCerta = pegarCor();
var corDisplay = document.getElementById("corDisplay");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    cores = escolherCorAleatoria(6);
    corCerta = pegarCor();
    corDisplay.textContent = corCerta;
    for(var i = 0; i < quadrados.length; i++){
        quadrados[i].style.backgroundColor = cores[i];
    }
});

corDisplay.textContent = corCerta;

for(var i = 0; i < quadrados.length; i++){
    quadrados[i].style.backgroundColor = cores[i];

    quadrados[i].addEventListener("click", function(){
        var corClicada = this.style.backgroundColor;
        console.log(corClicada, corCerta);
        if(corClicada === corCerta){
            msg.textContent = "Play again?"
            mudarCores(corCerta);
            h1.style.backgroundColor = corCerta;
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

function escolherCorAleatoria(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(corAleatoria())
    }

    return arr;
}

function corAleatoria(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

