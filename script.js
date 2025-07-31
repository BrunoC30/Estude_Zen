const obterResposta = document.getElementById("obterResposta");
const cardHacksMentais = document.getElementById("hacksMentais");
const novoConteudo = document.getElementById("hacks");
const trancado = document.getElementById("trancado");

obterResposta.addEventListener("input",()=>{

    if(obterResposta.value.trim().toLowerCase()==="poder"){

        cardHacksMentais.classList.remove("block");
        novoConteudo.style.display="flex"
        trancado.textContent="🔓Liberado🔓"
    }
});