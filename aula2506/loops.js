// Estruturas de repetição = loops = laços
// Essas estruturas possuem:
    // Condição de parada
    // Valor inicial (variável de controle, contador)
    // Atualização 

// While = Enquanto
/*
    while (condicao) {
        // o código que será repetido    
    }
*/

//Exemplo 1 --------------
let numero = 0; // Valor inicial

while(numero < 10) { // Condição de parada
    console.log(numero);
    numero++; // Atualização
}

//Exemplo 2 --------------
let numero2 = 0; 

while(numero2 < 50) { 
    console.log(numero2);
    numero2 = numero2 + 5; // um atalho para essa operação é colocar-> numero2 += 5
}

//Exemplo 3 --------------
let numero3 = 10;

while(numero3 >= 0) {
    console.log(numero3);
    numero3--; //numero3 = numero3 -1
}

console.log(numero3);

//Exemplo 4 -------------
//Soma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
let cont = 1;
let soma = 0; // acumulador

// Do 1 até 10
while(cont <= 10) {
    soma = soma + cont;
    cont++;
}

console.log(soma);

