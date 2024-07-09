//desafio 1
let contadorIncremento = 1;

while (contadorIncremento <= 10) {
    alert(`Contador incremento: ${contadorIncremento}`);
    contadorIncremento++;
}

//desafio 2
let contadorDecremento = 10;

while (contadorDecremento >= 1) {
    alert(`Contador decremento: ${contadorDecremento}`);
    contadorDecremento--;
}

//desafio 3
let contagemRegressiva = prompt("Digite um número para a contagem regressiva: ");

while (contagemRegressiva > 0) {
    alert(`Contador regressiva: ${contagemRegressiva}`);
    contagemRegressiva--;
}
alert("Feliz Ano Novo! :D");

//desafio 4
let contagemProgressiva = prompt("Digite um número para a contagem progressiva: ");
let contador = 1;

while (contador <= contagemProgressiva) {
    alert(`Contagem progressiva: ${contador}`);
    contador++;
}
