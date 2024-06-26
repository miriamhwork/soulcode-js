// 1. Faça a tabuada completa utilizando o loop for.
for(let nTab = 1; nTab <= 10; nTab++) {
    console.log("-------------");
    console.log(``);
    console.log("-------------");
    for(let mult = 1; mult <= 10; mult++) {
        console.log(`${nTab} x ${mult} = ${nTab*mult}`);
    }
}

// 2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.

let termoAnterior = 0;
let termoAtual = 1;

for(let c = 0; c < 10; c++) {
    let proximoTermo = termoAnterior + termoAtual
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
    console.log(termoAnterior);
}

// Outra forma de fazer (Wesley)
// let n = 10;
// let a = 0;
// let b = 1;

// for (let i = 1; i <= n; i++) {
//   let nextTerm = a + b;
//   console.log(nextTerm);
//   a = b;
//   b = nextTerm;
// }


// 4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.
let f = 5;
let produto = 1;

for(let c = 1; c <= f; c++) {
    produto = produto * c;
}

console.log(produto);

// 7. Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****

let linha = "";
let altura = 10;

for(let c = 0; c < altura; c++) {
    linha = linha + "*";
    console.log(linha);
}

// 6. Mostre a soma do 50 até o número 100 usando loop for.
let soma = 0;
for(let c = 50; c <= 100; c++){
    soma = soma + c;
}

console.log(`A soma de 50 até 100: ${soma}`);
