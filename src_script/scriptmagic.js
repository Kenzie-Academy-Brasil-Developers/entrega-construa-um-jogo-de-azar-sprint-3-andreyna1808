
const button = document.getElementById("ball");
button.addEventListener("click", function(){ 
   const perg = document.getElementById("resp")
   perg.innerText = resultados()
})

function numeros() {
    let resp = Math.ceil(Math.random() * 20)
  return resp
}

function resultados() {
let resposta = numeros()
  if (resposta == 1) {
    return "talvez, as chances são peqeunas, tu escolhe arriscar"
  } if (resposta == 2) {
    return "Nem sonhando"
  } if (resposta == 3) {
    return "Hhahaha parece piada"
  } if (resposta == 4) {
    return "Não, definitivamente, não."
  } if (resposta == 5) {
    return "Você pode confiar nisso, só que não."
  } if (resposta == 6) {
    return "A meu ver, sim, mas não."
  } if (resposta == 7) {
    return "Provavelmente... não."
  } if (resposta == 8) {
    return "Parece bom, só parece mesmo."
  } if (resposta == 9) {
    return "Sim, talvez, não pera, não."
  } if (resposta == 10) {
    return "Os sinais apontam que sim, possivelmente não."
  } if (resposta == 11) {
    return "Resposta nebulosa, tente novamente."
  } if (resposta == 12) {
    return "Pergunte novamente mais tarde."
  } if (resposta == 13) {
    return "Melhor não contar agora."
  } if (resposta == 14) {
    return "Não é possível prever agora."
  } if (resposta ==15) {
    return "Concentre-se e pergunte novamente."
  } if (resposta == 16) {
    return "Não conte com isso."
  } if (resposta == 17) {
    return " Minha resposta é não."
  } if (resposta == 18) {
    return "Minhas fontes dizem não."
  } if (resposta == 19) {
    return "Não parece ser bom."
  } if (resposta == 20) {
    return " Muito duvidoso."
  }
}