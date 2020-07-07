var numCores = 6;
var cores = escolherCorAleatoria(numCores);
var quadrados = document.querySelectorAll(".quadrado");
var corCerta = pegarCor();
var corDisplay = document.getElementById("corDisplay");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numCores = 3;
    cores = escolherCorAleatoria(numCores);
    corCerta = pegarCor();
    corDisplay.textContent = corCerta;
    for(var i = 0; i < quadrados.length; i++){
        if(cores[i]){
            quadrados[i].style.backgroundColor = cores[i];
        } else {
            quadrados[i].style.display = "none";
            h1.style.backgroundColor = "#019e3d";
        }
    }
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numCores = 6;
    cores = escolherCorAleatoria(numCores);
    corCerta = pegarCor();
    corDisplay.textContent = corCerta;
    for(var i = 0; i < quadrados.length; i++){
        quadrados[i].style.backgroundColor = cores[i];
        quadrados[i].style.display = "block";
        h1.style.backgroundColor = "#019e3d";
    }
});

resetButton.addEventListener("click", function(){
    cores = escolherCorAleatoria(numCores);
    corCerta = pegarCor();
    corDisplay.textContent = corCerta;
    msg.textContent = "";
    resetButton.textContent = "Novas cores";
    for(var i = 0; i < quadrados.length; i++){
        quadrados[i].style.backgroundColor = cores[i];
        h1.style.backgroundColor = "#019e3d";
    }
});

corDisplay.textContent = corCerta;

for(var i = 0; i < quadrados.length; i++){
    quadrados[i].style.backgroundColor = cores[i];

    quadrados[i].addEventListener("click", function(){
        var corClicada = this.style.backgroundColor;
        console.log(corClicada, corCerta);
        if(corClicada === corCerta){
            msg.textContent = "Correto!"
            resetButton.textContent = "Jogar novamente?";
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

