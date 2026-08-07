const botoes = document.querySelectorAll(".likeBtn");


// ================= CURTIDAS =================

botoes.forEach((botao) => {

    let curtido = false;
    let quantidade = 0;

    const contador = botao
        .parentElement
        .querySelector(".likes");


    botao.addEventListener("click", () => {


        if(curtido){

            curtido = false;

            quantidade--;

            botao.classList.remove("liked");

            botao.innerHTML = "🤍 Curtir";


        }else{


            curtido = true;

            quantidade++;

            botao.classList.add("liked");

            botao.innerHTML = "❤️ Curtido";


        }


        contador.textContent = quantidade;


    });


});



// ================= CORAÇÃO NA FOTO =================


const imagens = document.querySelectorAll(".imagem");


imagens.forEach((imagem)=>{


    const coracao = imagem.querySelector(".coracao");


    imagem.addEventListener("dblclick",()=>{


        coracao.classList.remove("ativo");


        // força reiniciar animação
        void coracao.offsetWidth;


        coracao.classList.add("ativo");


    });



});
