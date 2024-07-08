alert("Boas vindas ao Jogo do Número Secreto");
let numeroChute = prompt("Escolha um número entre 1 e 10: ");

let numeroSecreto = 5;

if (numeroChute == numeroSecreto) {
    console.log("Você descobriu o número secreto! (5) ");
} else {
    console.log("Você errou.");
}