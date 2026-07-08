let curtidas = 0;

const botao = document.getElementById("likeBtn");
const contador = document.getElementById("likes");

botao.addEventListener("click", function () {
    curtidas++;
    contador.textContent = curtidas;
});