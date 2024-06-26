// 1. Faça a tabuada completa utilizando o loop for.
for(let c = 1; c <= 10; c++){
    console.log("-------------");
    for(let tab = 1; tab <= 10; tab++){
        console.log(`${c} x ${tab} = ${tab*c}`);
    }
}

// 2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.
let nAntes = 0;
let nAtual = 1;

for(let c = 0; c < 10; c++) {
    let nProx = nAntes + nAtual;
    console.log(nAntes);
    nAntes = nAtual;
    nAtual = nProx;
}

// 3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).
for(let c = 10; c >= 1; c--){
    console.log(c);
}

// 4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.
let n = 1;

for(let c = 5; c >= 1 ;c--){
    n = n * c;
}

console.log(n);

// 5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
for(c = 1; c <= 100; c++) {
    if(c % 7 == 0) {
        console.log(`O número ${c} é múltiplo de 7.`)
    }
}

// 6. Mostre a soma do 50 até o número 100 usando loop for.
let soma = 0;
for(let c = 50; c <= 100; c++){
    soma = soma + c;
}
console.log(`A soma de 50 até 100 é ${soma}`);

// 7. Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****
for(let c = "*"; c < "******"; c = c + "*") {
    console.log(c);
}