alert("Boas vindas ao Jogo do Número Secreto");

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt("Escolha um número entre 1 e 100: ");
    if (numeroChute == numeroSecreto) {
        break;
    } else {
        if (numeroChute < numeroSecreto) {
            alert(`O número secreto é maior que ${numeroChute}`);
        } else {
            alert(`O número secreto é menor que ${numeroChute}`);
        }
        tentativas++;
    }
}

//Operador ternário: Se tentativas for maior que 1, então "tentativas", senão "tentativa".
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto = ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
