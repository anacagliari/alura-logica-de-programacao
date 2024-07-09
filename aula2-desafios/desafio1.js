//desafio 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//desafio 3
function botaoConsole() {
    console.log('O botão foi clicado.');
}

//desafio 4
function botaoAlert() {
    alert('Eu amo JS.');
}

//desafio 5
function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive na cidade ${cidade} e lembrei de você.`);
}

//desafio 6
function botaoSoma() {
    let valor1 = prompt('Digite o primeiro valor: ');
    let valor2 = prompt('Digite o segundo valor: ');
    let soma = parseInt(valor1) + parseInt(valor2);
    alert(`A soma de ${valor1} e ${valor2} é ${soma}`);
}