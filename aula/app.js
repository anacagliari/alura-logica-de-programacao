alert("Boas vindas ao Jogo do Número Secreto");

let numeroSecreto = 5
console.log(numeroSecreto);

let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt("Escolha um número entre 1 e 10: ");
    if (numeroChute == numeroSecreto) {
        alert(`Você descobriu o número secreto = ${numeroSecreto} com ${tentativas} tentativa(s).`);
    } else {
        if (numeroChute < numeroSecreto) {
            alert(`O número secreto é maior que ${numeroChute}`);
        } else {
            alert(`O número secreto é menor que ${numeroChute}`);
        }
        tentativas++;
    }
}
