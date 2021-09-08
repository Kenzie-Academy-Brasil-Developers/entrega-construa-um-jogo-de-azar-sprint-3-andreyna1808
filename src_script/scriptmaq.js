// Básico 
let left = document.getElementById('esquerda')
let center = document.getElementById('centro')
let right = document.getElementById('direita')

function rodar() {
    return Math.floor(Math.random() * 8 + 1);
}
function comando() {

    let counter = 0;

    document.getElementById("resultado").innerHTML = "";
    
    // Manda tudo
    let randomImg = setInterval(function () {
        counter++;
        for (var i = 1; i <= 8; i++) {
            left.src = "./img/" + rodar() + ".png";
            center.src = "./img/" + rodar() + ".png";
            right.src = "./img/" + rodar() + ".png";
        }
        if (counter > 50){ 
            if ((left.src === center.src) && (center.src === right.src)) {
                let result = document.getElementById("resultado")
                result.innerHTML = "Milagres Existem!!!";
            }
            else {
                let result = document.getElementById("resultado")
                result.innerHTML = "Como dizer isso, você... Se F*";
            }
        counter = 0;
        clearInterval(randomImg);
        }
    }, 50);
}

const button = document.getElementById("startButton");
button.addEventListener("click", comando)