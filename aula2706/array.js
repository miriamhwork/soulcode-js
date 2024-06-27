// Array => armazenar múltiplos valores, itens, elementos
// []  -> vazio
// [1, 2, 3, 4, 5] -> preenchido
// ["batata", "batata doce"] -> com strings

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras); // Ver os elementos dentro do array

let numeros = [1, 3.2, 5.4, 7.5, 9];
console.log(numeros);

// Acessando um elemento
console.log(figuras[1]);
console.log(figuras[5]);
console.log(numeros[1000]);

// Alterar os elementos
let notas = [6.5, 8.0, 9.0];
console.log("Antes: " + notas);
notas[1] = 8.5; // substitui
notas[2] += 0.5; // adiciona: notas[2] = notas [2] + 0.5
notas[0]++; // adicionar +1: notas[0] = notas[0] + 1
console.log("Depois: " + notas);
// Isso só funciona em array, nas strings não consegue alterar, só criando uma nova string. Aqui ele modifica o array original

// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);

//Percorrer array
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// Percorre o índice e o valor de cada elemento do array
let alunos = ["Alberto", "Ana", "Beatriz", "Carlos"];

for(let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`);
}

// For-of
let frutas = ["abacaxi", "laranja", "manga", "abacate"];

for(let f of frutas) { //Percorre todos os elementos e "f" assume cada um dos valores por vez
    console.log (f);
}

for (let i in frutas) { // Percorre os índices
    console.log(frutas[i]);
}