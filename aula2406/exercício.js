//Exercício JAVASCRIPT - Sintaxe básica

//1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8


let F = 100;
let temperaturaC = (F - 32 ) / 1.8;

console.log(temperaturaC.toFixed(2));


//2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

let nota1 = 1;
let nota2 = 2;
let nota3 = 3;
let nota4 = 4;
let nota5 = 5;
let peso = 3 + 2 + 1 + 4 + 5

let mediaPonderada = (nota1*3 + nota2*2 + nota3*1 + nota4*4 + nota5*5) / peso;

console.log(mediaPonderada);
