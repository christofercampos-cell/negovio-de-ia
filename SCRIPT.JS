const botoes = document.querySelectorAll(".likeBtn");

botoes.forEach((botao)=>{

    let curtido=false;
    let curtidas=0;

    const contador=botao.parentElement.querySelector(".likes");

    botao.addEventListener("click",()=>{

        if(curtido){

            curtido=false;
            curtidas--;

            botao.classList.remove("liked");
            botao.innerHTML="🤍 Curtir";

        }else{

            curtido=true;
            curtidas++;

            botao.classList.add("liked");
            botao.innerHTML="❤️ Curtido";

        }

        contador.textContent=curtidas;

    });

});
