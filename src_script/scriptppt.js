// Pontuações zeradas
let SuaPontacao = 0;
let PcPontuacao = 0;

// Básico
const SuaPontacao_span =  document.getElementById("user-score");
const PcPontuacao_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const pedra = document.getElementById("r");
const papel =  document.getElementById("p");
const tesoura =  document.getElementById("s");

//  Funções
function getComputerChoice(){
const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter){
  if (letter == 'r') return "Pedra";
  if (letter == 'p') return "Papel"
  return "Tesoura";
}
function win(userChoice,computerChoice){
  const smallUserWord = "vc".fontsize(3).sub();
  const smallCompWord = "pc".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  SuaPontacao++;
  SuaPontacao_span.innerHTML  = SuaPontacao;
  PcPontuacao_span.innerHTML = PcPontuacao;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ganha ${convertToWord(computerChoice)}${smallCompWord} Você ganhou! 😎🥳`;
  userChoice_div.classList.add('green-glow');
  document.getElementById('user-label').classList.add('animated','flash')

  setTimeout(function () {
    userChoice_div.classList.remove('green-glow');
    document.getElementById('user-label').classList.remove('animated','flash');
  },1000);

}

function lose(userChoice,computerChoice){
  const smallUserWord = "vc".fontsize(3).sub();
  const smallCompWord = "pc".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  PcPontuacao++;
  SuaPontacao_span.innerHTML  = SuaPontacao;
  PcPontuacao_span.innerHTML = PcPontuacao;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde para ${convertToWord(computerChoice)}${smallCompWord} Você Perdeu! 😪😖`;
  userChoice_div.classList.add('red-glow');
  document.getElementById('computer-label').classList.add('animated','flash');

  setTimeout(function () {
    userChoice_div.classList.remove('red-glow');
    document.getElementById('computer-label').classList.remove('animated','flash');
  },1000);

}

function draw(userChoice,computerChoice) {
  const smallUserWord = "vc".fontsize(3).sub();
  const smallCompWord = "pc".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} empata com ${convertToWord(computerChoice)}${smallCompWord} Empatou! 😬😟‍`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000)
}

// Comando de pontuação
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;

    case "sr":
    case "rp":
    case "ps":
    lose(userChoice,computerChoice);
    break;

    case "rr":
    case "pp":
    case "ss":
    draw(userChoice,computerChoice );
    break;
    default:

  }

}
function escolha(){
  pedra.addEventListener('click', () => game("r"));
  papel.addEventListener('click', () => game("p"));
  tesoura.addEventListener('click', () => game("s"));
}
escolha();

/* INICIAÇÃO DO JOGO COM A MÚSICA */
function iniciaJogo(){
  document.getElementById("iniciar").hidden = true;
  document.getElementById("jogo").hidden = false;
}
let btnPlay = document.getElementById("btnPlay");
btnPlay.onclick = function(){
        const audio = document.querySelector('audio')
        audio.play()
  iniciaJogo();
}