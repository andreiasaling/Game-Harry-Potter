const harry = document.querySelector(".harry-potter");
const voldemort = document.querySelector(".voldemort");
const dementor = document.querySelector(".dementor");
const pontuacao = document.querySelector("#label-pontos");
let pontos = 0;

// SONS
// const somTema = new Audio ();
// somTema.src = './sound/Theme.mp3';
// const somAvada = new Audio ();
// somAvada.src = './sound/Avada_Kedavra.mp3';

// somTema.play();

// PULO
const jump = () => {
  harry.classList.add("jump-harry");
  setTimeout(() => {
    harry.classList.remove("jump-harry");
  }, 1000);
};


// PRINCIPAL - JOGO

function loadTela() {
  //sumir tela start e inicar jogo
  const loopGame = setInterval(() => {
    const voldemortPosition = voldemort.offsetLeft;
    const harryPosition = +window.getComputedStyle(harry).bottom.replace("px", "");

    pontuacao.textContent = pontos;

    if (voldemortPosition <= 150 && voldemortPosition > 0 && harryPosition < 80) {
      voldemort.style.animation = "none";
      voldemort.style.left = `${voldemortPosition}px`;

      harry.style.animation = "none";
      harry.style.bottom = `${harryPosition}px`;

      harry.src = "./img/explosion-pixel.gif";
      harry.style.width = "100px";
      harry.style.marginLeft = "45px";
      harry.style.marginBottom = "75px";

      setTimeout( () => {
        telaGameOver();
      },1000);

      clearInterval(loopGame);
      clearInterval(score);

      document.querySelector('.gameover').style.display = 'flex';
      //carregar tela GAME OVER
    }
  }, 10);
}



// BOTÃO START
function telaInicial () {
  document.querySelector(".startbuttom").style.display = 'none';
  document.querySelector(".score").removeAttribute('hidden');
  pontos = 0;
  loadTela();
}

// CONTAGEM DE PONTUAÇÃO
const score = setInterval(() => {
  pontos += 7;
}, 400);

document.addEventListener("keydown", jump);