//desafio 1
let diaDaSemana = prompt("Que dia da semana é hoje? ");

if (diaDaSemana.toUpperCase() == "SÁBADO" || diaDaSemana.toUpperCase() == "DOMINGO") {
    alert("Bom final de semana!");
} else if (diaDaSemana.toUpperCase() == "SEGUNDA" || diaDaSemana.toUpperCase() == "TERÇA" || diaDaSemana.toUpperCase() == "QUARTA" || diaDaSemana.toUpperCase() == "QUINTA" || diaDaSemana.toUpperCase() == "SEXTA") {
    alert("Boa semana!");
} else {
    alert("Você digitou errado.");
}

//desafio 2
let numeroDigitado = prompt("Digite um número inteiro positivo ou negativo: ");

if (numeroDigitado > 0) {
    alert(`O número digitado ${numeroDigitado} é POSITIVO.`)
} else if (numeroDigitado < 0) {
    alert(`O número digitado ${numeroDigitado} é NEGATIVO.`)
} else {
    alert(`O número digitado é ZERO.`)
}

//desafio 3
let pontuacao = prompt("Digite a sua pontuação: ");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//desafio 4
let saldoDaConta = prompt("Digite o saldo da sua conta: ");
alert(`O saldo da sua conta é R$ ${saldoDaConta}`);

//desafio 5
let nome = prompt("Qual o seu nome? ");
alert(`Boas-vindas, ${nome}!`);
