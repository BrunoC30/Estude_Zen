//elementos do container hack de estudos
const obterResposta = document.getElementById("obterResposta");
const cardHacksMentais = document.getElementById("hacksMentais");
const novoConteudo = document.getElementById("hacks");
const trancado = document.getElementById("trancado");

//elementos do botão
let numero= 6;
let apertou = false
const mostrarNumero = document.getElementById("mostrarNumero");
const btao = document.getElementById("btao");

//ação de liberar o acesso
obterResposta.addEventListener("input",()=>{

    if(obterResposta.value.trim().toLowerCase()==="poder"){

        cardHacksMentais.classList.remove("block");
        novoConteudo.style.display="flex"
        trancado.textContent="🔓Liberado🔓"
    }
});

//ao apertar o numero aumenta
btao.addEventListener("click", ()=>{
    if(apertou==false){
        numero++;
        mostrarNumero
        mostrarNumero.innerText= `${numero} pessoas se identificaram`
        apertou=true;
        btao.style.backgroundColor= "#288f64ff";
    }
});

mostrarNumero.innerText= `${numero} pessoas se identificaram`