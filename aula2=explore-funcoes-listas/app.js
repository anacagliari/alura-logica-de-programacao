let numeroAleatorio = gerarNumeroAleatorio();
let numeroMaximo = 10;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroAleatorio);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}