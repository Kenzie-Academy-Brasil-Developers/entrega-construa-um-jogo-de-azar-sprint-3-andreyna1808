// Em construção!!!
let palavras = ['KENZIE','DUCK','EBANX','RAFAEL','MIGUEL','DRICA','DANIELA','DIGUIM']
let gerador = document.getElementById('gerador')
let linha_tab = []
coluna_tab = []

function gerarString(tamanho) {
    let stringAleatoria = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

function tabuadaCart(n) {
    let tabela = [n];
    for (let l = 0; l <= n; l++) {
        tabela[l] = [n];
        let linha = document.createElement('tr');
        gerador.appendChild(linha)

        console.log(linha);

        for (let c = 0; c <=n; c++) {
            tabela[l][c] = gerarString(1);
            let coluna = document.createElement('td');
            linha.appendChild(coluna)
            coluna.innerHTML = gerarString(1)
        }
    }
    console.table(tabela);
    }
    console.log(tabuadaCart(9));



