const harry = document.querySelector(".harry-potter");
const voldemort = document.querySelector(".voldemort");
const dementor = document.querySelector(".dementor");

// SONS
const somTema = new Audio ();
somTema.src = './sound/Theme.mp3';
const somAvada = new Audio ();
somAvada.src = './sound/Avada_Kedavra.mp3';

// PULO
const jump = () => {
    harry.classList.add("jump-harry");
    setTimeout(() => {
      harry.classList.remove("jump-harry");
    }, 1000);
  };

document.addEventListener("keydown", jump);