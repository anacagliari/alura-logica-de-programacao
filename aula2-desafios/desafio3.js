//desafio 1
/*
function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}
let altura = 1.80;
let peso = 83.5;
console.log(`Cálculo IMC para altura (${altura}m) e peso (${peso}kg): ` + calculoIMC(altura, peso).toFixed(2));

//desafio 2
function fatorial(numero) {
    let resultado = 1;
    let contador = 2;
    while (contador <= numero) {
        resultado = contador * resultado;
        contador++;
    }
    return resultado;
}
let numero = 8;
console.log(`Fatorial de ${numero}!: ` + fatorial(numero));

//desafio 3
function converterEmDolar(valorParaConversao) {
    let valorEmDolar = valorParaConversao * 5.414
    return valorEmDolar.toFixed(2);
}
let valorParaConversao = 1935.56;
console.log(`R$ ${valorParaConversao} -> US$ ` + converterEmDolar(1935.56));

//desafio 4
function calculoRetangulo(alturaRetangulo, larguraRetangulo) {
    let areaRetangulo = alturaRetangulo * larguraRetangulo;
    let perimetroRetangulo = alturaRetangulo + larguraRetangulo;
    return console.log(`[RETÂNGULO] Altura ${alturaRetangulo} e Largura ${larguraRetangulo} = Área: ${areaRetangulo} e Perímetro: ${perimetroRetangulo}`);
}
let alturaRetangulo = 5;
let larguraRetangulo= 6;
console.log(calculoRetangulo(alturaRetangulo, larguraRetangulo));

//desafio 5
function calculoCirculo(raio) {
    let areaCirculo = pi * (raio * raio);
    let perimetroCirculo = 2 * pi * raio;
    return console.log(`[CÍRCULO] Raio ${raio} = Área: ${areaCirculo} e Perímetro: ${perimetroCirculo}`);
}
let pi = 3.14;
let raio = 15;
console.log(calculoCirculo(raio));
*/

//desafio 6
function tabuada(numeroTabuada) {
    for (let i = 0; i <= 10; i++) {
        console.log(numeroTabuada + ' * ' + i + ' = ' + numeroTabuada * i);
    }
}
let numeroTabuada = 6;
console.log(tabuada(numeroTabuada));