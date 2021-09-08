let t = document.getElementById("tabuleiro");
let transportes, primeiroclique, encontradas, data;

// Comando do Clique
function clique(e){
    if(transportes.length > 0){
        if(primeiroclique == false){
            data.colunainicial = parseInt(e.target.dataset.index);
            data.linhainicial = parseInt(e.target.parentElement.dataset.index);
            data.letrainicial = e.target.innerText;
            
            if(e.target.dataset.encontrada == "true"){
                e.target.classList.replace("encontrada", "selecionada");
            }else{
                e.target.classList.add("selecionada");
            }
        
            primeiroclique = true;
        }
        // VALIDAÇÃO
        else{
            if(data.colunainicial != parseInt(e.target.dataset.index) && data.linhainicial != parseInt(e.target.parentElement.dataset.index)){
                return;
            }
            
            data.colunafinal = parseInt(e.target.dataset.index);
            data.linhafinal = parseInt(e.target.parentElement.dataset.index);
            data.letrafinal = e.target.innerText;
            
        // Validar e ir para as próximas
            if(data.colunainicial > data.colunafinal){
                let novacolunainicial = data.colunafinal;
                let novacolunafinal = data.colunainicial;
                data.colunainicial = novacolunainicial;
                data.colunafinal = novacolunafinal;
            }
            if(data.linhainicial > data.linhafinal){
                let novalinhainicial = data.linhafinal;
                let novalinhafinal = data.linhainicial;
                data.linhainicial = novalinhainicial;
                data.linhafinal = novalinhafinal;
            }
            
            primeiroclique = false;
            
            if(e.target.dataset.encontrada == "true"){
                e.target.classList.replace("encontrada", "selecionada");
            }else{
                e.target.classList.add("selecionada");
            }
            comparar(data);
        }
    }
}

// HORIZONTAL
function horizontal(fn){
    console.log("seleção horizontal");
    for(let i = data.colunainicial; i < data.colunafinal + 1; i++){
        let td = t.rows[data.linhainicial].cells[i];
        if(td.dataset.encontrada == "true"){
            td.classList.replace("encontrada", "selecionada");
        }else{
            td.classList.add("selecionada");
        }
        fn(td);
    }
}

//VERTICAL
function vertical(fn){
    console.log("seleção vertical");
    for(let i = data.linhainicial; i < data.linhafinal + 1; i++){
        let td = t.rows[i].cells[data.colunainicial];
        if(td.dataset.encontrada == "true"){
            td.classList.replace("encontrada", "selecionada");
        }else{
            td.classList.add("selecionada");
        }
        fn(td);
    }
}

// DIAGONAL EM CONSTRUÇÃO, IA PEGAR O MESMO RACIOCINIO E TENTAR APLICAR NA DIAGONAL
function diagonal(fn){
    console.log("seleção diagonal");
    for(let i = data.linhainicial; i < data.linhafinal + 1; i++){
        let td = t.rows[data.linhainicial].cells[i];
        if(td.dataset.encontrada == "true"){
            td.classList.replace("encontrada", "selecionada");
        }else{
            td.classList.add("selecionada");
        }
        fn(td);
    }
}

// Valida e Modifica as Encontradas das Restantes
function comparar(data){
    let selecionados = {
        palavra:"",
        elementos:[]
    }
    if(data.colunainicial != data.colunafinal && data.linhainicial == data.linhafinal){
        horizontal(function(td){
            selecionados.palavra += td.innerText;
            selecionados.elementos.push(td);
        });
    }else if(data.colunainicial == data.colunafinal && data.linhainicial != data.linhafinal){
        vertical(function(td){
            selecionados.palavra += td.innerText;
            selecionados.elementos.push(td);
        });
    }
    if(transportes.includes(selecionados.palavra)){
        transportes = transportes.filter(function(p){
            if(selecionados.palavra != p){
                return p;
            }
        });
        setTimeout(function(){
            for(let i = 0; i < selecionados.elementos.length; i++){
                let elemento = selecionados.elementos[i];
                elemento.classList.replace("selecionada", "encontrada");
                elemento.dataset.encontrada = "true";
            }
        }, 1000);
        encontradas += 1;
        document.getElementById("encontradas").innerText = "Encontradas: "+encontradas+"\n Restantes: "+ transportes.length;
        if(transportes.length == 0){
            setTimeout(function(){
                document.getElementById("parabens").hidden = false;
                document.getElementById("btnVoltar").hidden = false;
            }, 2000);
        }
        data = {};
    }else{
        data = {};
        setTimeout(function(){
            for(let i = 0; i < selecionados.elementos.length; i++){
                let elemento = selecionados.elementos[i];
                elemento.classList.replace("selecionada", "errado");
            }
            setTimeout(function(){
                for(let i = 0; i < selecionados.elementos.length; i++){
                    let elemento = selecionados.elementos[i];
                    if(elemento.dataset.encontrada == "true"){
                        elemento.classList.replace("errado", "encontrada");
                    }else{
                        elemento.classList.remove("errado");
                    }
                }
            }, 1000);
        }, 1000);
    }
}

// Incio do Jogo - Palavras aceitas
function iniciaJogo(){
    transportes=['ANDREYNA', 'KENZIE', 'DUCK', 'EBANX','RAFAEL','MIGUEL'];
    primeiroclique = false;
    encontradas = 0;
    data = {};
    document.getElementById("encontradas").innerText = "Encontradas: "+encontradas+"\n Restantes: "+ transportes.length;
    for(let i = 0; i < t.rows.length; i++){
        t.rows[i].id = "linha " + i;
        t.rows[i].dataset.index = i;
        for(let j = 0; j < t.rows[i].cells.length; j++){
            t.rows[i].cells[j].classList = [];
            t.rows[i].cells[j].dataset.encontrada = "false";
            t.rows[i].cells[j].id = "coluna " + j;
            t.rows[i].cells[j].dataset.index = j;
            t.rows[i].cells[j].addEventListener("click", clique);
        }
    }
    document.getElementById("iniciar").hidden = true;
    document.getElementById("parabens").hidden = true;
    document.getElementById("jogo").hidden = false;
    document.getElementById("btnVoltar").hidden = true;
}
let btnPlay = document.getElementById("btnPlay");
btnPlay.onclick = function(){
    iniciaJogo();
}