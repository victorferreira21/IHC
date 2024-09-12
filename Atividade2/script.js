function soma(x,y){
    return x + y;
}

let som = soma(5,3)
console.log(som)

function subtracao(x,y){
    return x - y;
}

let sub = subtracao (10,7)
console.log(sub);

function multiplicacao(x,y){
    return x * y;

}
let multi = multiplicacao(4,6)
console.log(multi);

   
function divisao(x,y){
    return x / y;

}
let div = divisao(15,3)
console.log(div);

function divisao(x,y){
    if (x == 0 || y == 0){
        console.log("Erro = Divisao por zero!")
        return -1;
    }

}
let div2 = divisao(10,0)
console.log(div2)

function num(number) {
    if (number % 2 === 0) {
        console.log("O número " + number + " é par.");
    } else {
        console.log("O número " + number + " é ímpar.");
    }
}

const resultado = 4 + 6; 

function somaIntervalo(inicio, fim) {
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }
    return soma;
}

const inicio = 1;
const fim = 5;
const numint = somaIntervalo(inicio, fim);

console.log("A soma dos números de " + inicio + " até " + fim + " é: " + numint);


function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

const numero = 5;
const fatorialDeCinco = fatorial(numero);

console.log("O fatorial de " + numero + " é: " + fatorialDeCinco);


function contarVogais(palavra) {
    let vogais = "aeiouAEIOU";
    let contador = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    
    return contador;
}

const palavra = "javascript";
const numeroDeVogais = contarVogais(palavra);

console.log("A palavra '" + palavra + "' tem " + numeroDeVogais + " vogais.");
