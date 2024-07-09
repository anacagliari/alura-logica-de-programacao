//desafio 1
console.log("Boas-vindas!");

//desafio 2
let nome = "Ana Caroline";
console.log(`Olá, ${nome}!`);

//desafio 3
alert(`Olá, ${nome}!`);

//desafio 4
let linguagemDeProgramacao = prompt("Qual a linguagem de programação que você mais gosta? ");
console.log(linguagemDeProgramacao);

//desafio 5
let valor1 = 25;
let valor2 = 32;
let resultado = 0;
resultado = valor1 + valor2;
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//desafio 6
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//desafio 7
let idade = prompt("Qual a sua idade? ");
let palavraAno = idade > 1 ? "anos" : "ano";
if (idade >= 18) {
    console.log(`${idade} anos. Pessoa maior de idade.`);
} else {
    console.log(`${idade} ${palavraAno}. Pessoa menor de idade.`);
}

//desafio 8
let numero = prompt("Digite um valor inteiro positivo ou negativo: ");
if (numero > 0) {
    console.log(`O número ${numero} é positivo.`);
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo.`);
} else {
    console.log(`O número ${numero} é ZERO.`);
}

//desafio 9
let contador = 1;
while (contador <= 10) {
    console.log(`Contagem: ${contador}`);
    contador++;
}

//desafio 10
let nota = 6.1;
if (nota >= 7) {
    console.log(`Nota: ${nota} - Aprovado!`);
} else {
    console.log(`Nota: ${nota} - Reprovado.`);
}

//desafio 11
console.log(parseInt(Math.random() * 5 + 1));

//desafio 12
console.log(parseInt(Math.random() * 10 + 1));

//desafio 13
console.log(parseInt(Math.random() * 1000 + 1));
