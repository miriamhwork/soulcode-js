// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let num = 0;

while (num >= 0 && num < 10) {
    num +=2;
    console.log(num);
}

// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70
let mult = 1;

while (mult >= 0 && mult <= 10) {
    resultado = 7 * mult
    console.log("7 x " + mult + " = " + resultado);
    mult++;
}

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.
// NUMERO % 2 != 0 checar se o numero é impar
let numImpar = 1;
let soma = 0

while (numImpar <= 999) {
    if (numImpar % 2 != 0) {
        soma = soma + numImpar
    }
    numImpar++;
}

console.log(soma)

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

let contaN = 0;
let Ndiv9 = 0;

while (contaN < 1000) {
    contaN++
    if (contaN % 9 == 0) {
        console.log(contaN)
        Ndiv9 += 1 // poderia ser Ndvi9++
    }
}

console.log("Entre 1 e 1000 existem " + Ndiv9 + " divisíveis por 9")


