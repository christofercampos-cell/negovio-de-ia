const botoes = document.querySelectorAll(".likeBtn");
const contadores = document.querySelectorAll(".likes");


botoes.forEach((botao, index) => {

    let curtido = false;
    let numeroCurtidas = 0;


    botao.addEventListener("click", () => {


        if(curtido){

            curtido = false;
            numeroCurtidas--;
            botao.innerHTML = "❤️ Curtir";

        }else{

            curtido = true;
            numeroCurtidas++;
            botao.innerHTML = "❤️ Curtido";

        }


        contadores[index].textContent = numeroCurtidas;


    });


});