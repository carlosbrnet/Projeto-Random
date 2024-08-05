const buttonSorteio = document.querySelector(".button-sorteio");
const resultado = document.querySelector(".resultado")

function sotearNumero() {
  const inputMin = Math.ceil(document.querySelector(".input-min").value);
  const inputMax = Math.floor(document.querySelector(".input-max").value);
  const result =
    Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
  resultado.innerHTML = result
  resultado.style.opacity = "10"
}


buttonSorteio.addEventListener("click", sotearNumero);
